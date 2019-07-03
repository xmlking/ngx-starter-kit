import { Directive, ElementRef, Input, OnChanges, OnDestroy, Renderer2, SimpleChanges } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { combineLatest, Subject } from 'rxjs';
import { filter, map } from 'rxjs/operators';

import { untilDestroy } from '../../operators';

export interface MatchExp {
  [classes: string]: string;
}

@Directive({
  selector: '[routerLinkMatch]',
})
export class RouterLinkMatchDirective implements OnDestroy, OnChanges {
  private curRoute: string;
  private matchExp: MatchExp;
  private onChangesHook = new Subject<MatchExp>();

  @Input('routerLinkMatch')
  set routerLinkMatch(v: MatchExp) {
    if (v && typeof v === 'object') {
      this.matchExp = v;
    } else {
      throw new TypeError(
        `Unexpected type '${typeof v}' of value for ` + `input of routerLinkMatch directive, expected 'object'`,
      );
    }
  }

  constructor(router: Router, private renderer: Renderer2, private ngEl: ElementRef) {
    combineLatest([router.events, this.onChangesHook])
      .pipe(
        map(([e]) => e),
        filter(e => e instanceof NavigationEnd),
        untilDestroy(this),
      )
      .subscribe(e => {
        this.curRoute = (e as NavigationEnd).urlAfterRedirects;

        this._updateClass(this.matchExp);
      });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.routerLinkMatch) {
      this.onChangesHook.next(changes.routerLinkMatch.currentValue);
    }
  }

  private _updateClass(v: MatchExp): void {
    Object.keys(v).forEach(cls => {
      if (v[cls] && typeof v[cls] === 'string') {
        const regexp = new RegExp(v[cls]);
        if (this.curRoute.match(regexp)) {
          this._toggleClass(cls, true);
        } else {
          this._toggleClass(cls, false);
        }
      } else {
        throw new TypeError(
          `Could not convert match value to Regular Expression. ` +
            `Unexpected type '${typeof v[cls]}' for value of key '${cls}' ` +
            `in routerLinkMatch directive match expression, expected 'non-empty string'`,
        );
      }
    });
  }

  private _toggleClass(classes: string, enabled: boolean): void {
    classes = classes.trim();

    classes.split(/\s+/g).forEach(cls => {
      if (enabled) {
        this.renderer.addClass(this.ngEl.nativeElement, cls);
      } else {
        this.renderer.removeClass(this.ngEl.nativeElement, cls);
      }
    });
  }

  ngOnDestroy() {}
}
