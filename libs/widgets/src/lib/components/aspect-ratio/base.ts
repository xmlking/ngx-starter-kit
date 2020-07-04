/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { ElementRef, OnChanges, OnDestroy, OnInit, SimpleChange, SimpleChanges, Directive } from '@angular/core';
import { MediaMarshaller, MediaQuerySubscriber, StyleBuilder, StyleDefinition, StyleUtils } from '@angular/flex-layout';
import { buildLayoutCSS } from './layout-validator';

@Directive()
export abstract class BaseDirective implements OnInit, OnDestroy, OnChanges {
  /** MediaQuery Activation Tracker */
  protected mqActivation?: any; // ResponsiveActivation;

  /** Dictionary of input keys with associated values */
  protected inputMap: { [key: string]: any } = {};

  /**
   * Has the `ngOnInit()` method fired
   *
   * Used to allow *ngFor tasks to finish and support queries like
   * getComputedStyle() during ngOnInit()
   */
  protected hasInitializedPrivate = false;

  /** Cache map for style computation */
  protected styleCache: Map<string, StyleDefinition> = new Map();

  /**
   * Imperatively determine the current activated [input] value;
   * if called before ngOnInit() this will return `undefined`
   */
  get activatedValue(): string | number {
    return this.mqActivation ? this.mqActivation.activatedInput : undefined;
  }

  /**
   * Change the currently activated input value and force-update
   * the injected CSS (by-passing change detection).
   *
   * NOTE: Only the currently activated input value will be modified;
   *       other input values will NOT be affected.
   */
  set activatedValue(value: string | number) {
    let key = 'baseKey';
    let previousVal;

    if (this.mqActivation) {
      key = this.mqActivation.activatedInputKey;
      previousVal = this.inputMap[key];
      this.inputMap[key] = value;
    }
    const change = new SimpleChange(previousVal, value, false);

    this.ngOnChanges({ [key]: change } as SimpleChanges);
  }

  protected constructor(
    protected mediaMarshaller: MediaMarshaller,
    protected elementRef: ElementRef,
    protected styler: StyleUtils,
    protected styleBuilder: StyleBuilder
  ) {}

  /**
   * Does this directive have 1 or more responsive keys defined
   * Note: we exclude the 'baseKey' key (which is NOT considered responsive)
   */
  hasResponsiveAPI(baseKey: string) {
    const totalKeys = Object.keys(this.inputMap).length;
    const baseValue = this.inputMap[baseKey];
    return totalKeys - (!!baseValue ? 1 : 0) > 0;
  }

  // *********************************************
  // Lifecycle Methods
  // *********************************************

  /**
   * Use post-component-initialization event to perform extra
   * querying such as computed Display style
   */
  ngOnInit() {
    this.hasInitializedPrivate = true;
  }

  ngOnChanges(change: SimpleChanges) {
    throw new Error(`BaseDirective::ngOnChanges should be overridden in subclass: ${change}`);
  }

  ngOnDestroy() {
    if (this.mqActivation) {
      this.mqActivation.destroy();
    }
    delete this.mediaMarshaller;
  }

  // *********************************************
  // Protected Methods
  // *********************************************

  /** Access to host element's parent DOM node */
  protected get parentElement(): any {
    return this.elementRef.nativeElement.parentNode;
  }

  protected get nativeElement(): HTMLElement {
    return this.elementRef.nativeElement;
  }

  /** Add styles to the element using predefined style builder */
  protected addStyles(input: string, parent?: object) {
    // const builder = this.styleBuilder!;
    const builder = this.styleBuilder;
    const useCache = builder.shouldCache;

    let genStyles: StyleDefinition | undefined = this.styleCache.get(input);

    if (!genStyles || !useCache) {
      genStyles = builder.buildStyles(input, parent);
      if (useCache) {
        this.styleCache.set(input, genStyles);
      }
    }

    this._applyStyleToElement(genStyles);
    builder.sideEffect(input, genStyles, parent);
  }

  /** Access the current value (if any) of the @Input property */
  protected _queryInput(key: string) {
    return this.inputMap[key];
  }

  /**
   * Was the directive's default selector used ?
   * If not, use the fallback value!
   */
  protected _getDefaultVal(key: string, fallbackVal: any): string | boolean {
    const val = this._queryInput(key);
    const hasDefaultVal = val !== undefined && val !== null;
    return hasDefaultVal && val !== '' ? val : fallbackVal;
  }

  /**
   * Quick accessor to the current HTMLElement's `display` style
   * Note: this allows us to preserve the original style
   * and optional restore it when the mediaQueries deactivate
   */
  protected _getDisplayStyle(source: HTMLElement = this.nativeElement): string {
    const query = 'display';
    return this.styler.lookupStyle(source, query);
  }

  /** Quick accessor to raw attribute value on the target DOM element */
  protected _getAttributeValue(attribute: string, source: HTMLElement = this.nativeElement): string {
    return this.styler.lookupAttributeValue(source, attribute);
  }

  /**
   * Determine the DOM element's Flexbox flow (flex-direction).
   *
   * Check inline style first then check computed (stylesheet) style.
   * And optionally add the flow value to element's inline style.
   */
  protected _getFlexFlowDirection(target: HTMLElement, addIfMissing = false): string {
    if (target) {
      const [value, hasInlineValue] = this.styler.getFlowDirection(target);

      if (!hasInlineValue && addIfMissing) {
        const style = buildLayoutCSS(value);
        const elements = [target];
        this.styler.applyStyleToElements(style, elements);
      }

      return value.trim();
    }

    return 'row';
  }

  /** Applies styles given via string pair or object map to the directive element */
  protected _applyStyleToElement(
    style: StyleDefinition,
    value?: string | number,
    element: HTMLElement = this.nativeElement
  ) {
    this.styler.applyStyleToElement(element, style, value);
  }

  /** Applies styles given via string pair or object map to the directive's element */
  protected _applyStyleToElements(style: StyleDefinition, elements: HTMLElement[]) {
    this.styler.applyStyleToElements(style, elements);
  }

  /**
   *  Save the property value; which may be a complex object.
   *  Complex objects support property chains
   */
  protected _cacheInput(key?: string, source?: any) {
    if (typeof source === 'object') {
      for (const prop in source) {
        if (prop) {
          this.inputMap[prop] = source[prop];
        }
      }
    } else {
      if (!!key) {
        this.inputMap[key] = source;
      }
    }
  }

  /**
   *  Build a ResponsiveActivation object used to manage subscriptions to mediaChange notifications
   *  and intelligent lookup of the directive's property value that corresponds to that mediaQuery
   *  (or closest match).
   */
  protected _listenForMediaQueryChanges(key: string, defaultValue: any, onMediaQueryChange: MediaQuerySubscriber) {
    // ResponsiveActivation {
    // if (!this.mqActivation) {
    //   let keyOptions = new KeyOptions(key, defaultValue, this.inputMap);
    //   this.mqActivation = new ResponsiveActivation(keyOptions, this._mediaMonitor,
    //     (change) => onMediaQueryChange(change));
    // }
    // return this.mqActivation;
  }

  /** Special accessor to query for all child 'element' nodes regardless of type, class, etc */
  protected get childrenNodes(): HTMLElement[] {
    const obj = this.nativeElement.children;
    const buffer: any[] = [];

    // iterate backwards ensuring that length is an UInt32
    for (let i = obj.length; i--; ) {
      buffer[i] = obj[i];
    }
    return buffer;
  }

  protected get hasInitialized() {
    return this.hasInitializedPrivate;
  }
}
