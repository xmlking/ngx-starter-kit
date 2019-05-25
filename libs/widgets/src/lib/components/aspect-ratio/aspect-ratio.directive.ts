import {
  AfterContentInit,
  ChangeDetectorRef,
  ContentChild,
  Directive,
  ElementRef, Injectable,
  Input,
  OnChanges,
  OnDestroy,
  OnInit, Optional,
  Renderer2,
  SimpleChanges,
} from '@angular/core';
import { BaseDirective2, MediaChange, MediaMarshaller, StyleBuilder, StyleUtils } from '@angular/flex-layout';
import { AspectRatioContentDirective } from './aspect-ratio-content.directive';
import { BaseDirective } from './base';

export interface AspectRatioParent {
  inline: boolean;
}
@Injectable({providedIn: 'root'})
export class AspectRatioStyleBuilder extends StyleBuilder {
  buildStyles(input: string, parent: AspectRatioParent) {
    return {'xxx': 'xxx'};
  }
}

@Directive({
  selector: `
  [ngxAspectRatio],
  [ngxAspectRatio.xs], [ngxAspectRatio.sm], [ngxAspectRatio.md], [ngxAspectRatio.lg], [ngxAspectRatio.xl],
  [ngxAspectRatio.lt-sm], [ngxAspectRatio.lt-md], [ngxAspectRatio.lt-lg], [ngxAspectRatio.lt-xl],
  [ngxAspectRatio.gt-xs], [ngxAspectRatio.gt-sm], [ngxAspectRatio.gt-md], [ngxAspectRatio.gt-lg],
  `,
})
export class AspectRatioDirective extends BaseDirective implements OnInit, AfterContentInit, OnChanges, OnDestroy {
  @ContentChild(AspectRatioContentDirective, { read: ElementRef, static: true })
  contentElement: ElementRef;
  pseudoElement: any;

  constructor(
    marshal: MediaMarshaller,
    protected styler: StyleUtils,
    protected renderer: Renderer2,
    protected elementRef: ElementRef,
    protected cd: ChangeDetectorRef,
    @Optional() protected styleBuilder: AspectRatioStyleBuilder,
  ) {
    super(marshal, elementRef, styler, styleBuilder);

    this.pseudoElement = this.renderer.createElement('div');
    this.renderer.addClass(this.pseudoElement, 'ngx-aspect-ratio-pseudo-element');

    this._cacheInput('aspectRatio', '');
  }

  /* tslint:disable */
  @Input('ngxAspectRatio')
  set aspectRatio(val) {
    this._cacheInput('aspectRatio', val);
  }

  @Input('ngxAspectRatio.xs')
  set aspectRatioXs(val) {
    this._cacheInput('aspectRatioXs', val);
  }

  @Input('ngxAspectRatio.sm')
  set aspectRatioSm(val) {
    this._cacheInput('aspectRatioSm', val);
  }

  @Input('ngxAspectRatio.md')
  set aspectRatioMd(val) {
    this._cacheInput('aspectRatioMd', val);
  }

  @Input('ngxAspectRatio.lg')
  set aspectRatioLg(val) {
    this._cacheInput('aspectRatioLg', val);
  }

  @Input('ngxAspectRatio.xl')
  set aspectRatioXl(val) {
    this._cacheInput('aspectRatioXl', val);
  }

  @Input('ngxAspectRatio.gt-xs')
  set aspectRatioGtXs(val) {
    this._cacheInput('aspectRatioGtXs', val);
  }

  @Input('ngxAspectRatio.gt-sm')
  set aspectRatioGtSm(val) {
    this._cacheInput('aspectRatioGtSm', val);
  }

  @Input('ngxAspectRatio.gt-md')
  set aspectRatioGtMd(val) {
    this._cacheInput('aspectRatioGtMd', val);
  }

  @Input('ngxAspectRatio.gt-lg')
  set aspectRatioGtLg(val) {
    this._cacheInput('aspectRatioGtLg', val);
  }

  @Input('ngxAspectRatio.lt-sm')
  set aspectRatioLtSm(val) {
    this._cacheInput('aspectRatioLtSm', val);
  }

  /* tslint:enable */

  @Input('ngxAspectRatio.lt-md')
  set aspectRatioLtMd(val) {
    this._cacheInput('aspectRatioLtMd', val);
  }

  @Input('ngxAspectRatio.lt-lg')
  set aspectRatioLtLg(val) {
    this._cacheInput('aspectRatioLtLg', val);
  }

  @Input('ngxAspectRatio.lt-xl')
  set aspectRatioLtXl(val) {
    this._cacheInput('aspectRatioLtXl', val);
  }

  /**
   * For @Input changes on the current mq activation property, see onMediaQueryChanges()
   */
  ngOnChanges(changes: SimpleChanges) {
    if (changes['aspectRatio'] != null || this._mqActivation) {
      this._updateStyle();
    }
  }

  ngOnInit() {
    super.ngOnInit();

    this._listenForMediaQueryChanges('aspectRatio', '', (changes: MediaChange) => {
      this._updateStyle(changes.value);
    });
    this._updateStyle();
  }

  ngAfterContentInit() {
    if (this.elementRef && this.pseudoElement && this.contentElement) {
      this.renderer.addClass(this.elementRef.nativeElement, 'ngx-aspect-ratio-host-element');

      this.renderer.insertBefore(this.elementRef.nativeElement, this.pseudoElement, this.contentElement.nativeElement);
    } else {
      if (!this.elementRef) {
        console.error('ngxAspectRatio: Host Element is not defined.');
      }
      if (!this.pseudoElement) {
        console.error('ngxAspectRatio: Pseudo Element is not defined.');
      }
      if (!this.contentElement) {
        console.error('ngxAspectRatio: AspectRatioContent Element is not defined.');
      }
    }
  }

  calculatePadding(ratio: string) {
    const ratios = ratio.split(':');
    return (+ratios[1] / +ratios[0]) * 100;
  }

  renderPadding(paddingInPercent: number, compensation?: string) {
    if (compensation) {
      this.renderer.setStyle(this.pseudoElement, 'padding-top', `calc(${paddingInPercent}% ${compensation})`);
    } else {
      this.renderer.setStyle(this.pseudoElement, 'padding-top', `${paddingInPercent}%`);
    }
    this.cd.markForCheck();
  }

  protected _updateStyle(value?: string | number) {
    let compensation: string;
    let aspectRatio = value || this._queryInput('aspectRatio') || '';
    if (this._mqActivation) {
      aspectRatio = this._mqActivation.activatedInput;
    }

    if (aspectRatio) {
      if (aspectRatio.split('-').length > 1) {
        const ratioAndCompensation = aspectRatio.split('-');
        aspectRatio = ratioAndCompensation[0];
        compensation = `- ${ratioAndCompensation[1]}`;
      } else if (aspectRatio.split('+').length > 1) {
        const ratioAndCompensation = aspectRatio.split('+');
        aspectRatio = ratioAndCompensation[0];
        compensation = `+ ${ratioAndCompensation[1]}`;
      }
    }

    if (compensation) {
      this.renderPadding(this.calculatePadding(aspectRatio), compensation);
    } else {
      this.renderPadding(this.calculatePadding(aspectRatio));
    }
  }
}
