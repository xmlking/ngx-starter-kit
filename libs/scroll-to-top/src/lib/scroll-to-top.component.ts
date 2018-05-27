import { Component, Inject, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { scrollFabAnimation } from '@ngx-starter-kit/animations';
import { PageScrollConfig, PageScrollService, PageScrollInstance } from 'ngx-page-scroll';
import { map, tap, debounceTime, distinctUntilChanged, throttleTime, takeUntil } from 'rxjs/operators';
import { BehaviorSubject, fromEvent, Subject } from 'rxjs';

enum ShowStatus {
  show = 'show',
  hide = 'hide'
}

@Component({
  selector: 'scroll-to-top',
  templateUrl: './scroll-to-top.component.html',
  styleUrls: ['./scroll-to-top.component.scss'],
  animations: [scrollFabAnimation]
})
export class ScrollToTopComponent implements OnInit, OnDestroy {
  private _destroyed$ = new Subject<void>();

  //TODO should I  use CDK Scrollable?
  // @ViewChild(Scrollable) scrollable: Scrollable;

  private _stateSubject = new BehaviorSubject<string>(ShowStatus.hide);
  state$ = this._stateSubject.asObservable();

  pageScrollInstance: PageScrollInstance;

  constructor(private pageScrollService: PageScrollService, @Inject(DOCUMENT) private document: any) {}

  private getShowHide() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (scrollTop > 100) {
      return ShowStatus.show;
    } else {
      return ShowStatus.hide;
    }
  }

  ngOnInit() {
    this.pageScrollInstance = PageScrollInstance.simpleInstance(this.document, '#top');
    fromEvent(window, 'scroll')
      .pipe(
        takeUntil(this._destroyed$),
        // throttleTime(50),
        map(_ => this.getShowHide()),
        distinctUntilChanged(),
        tap(state => this._stateSubject.next(state))
      )
      .subscribe();
  }

  ngOnDestroy() {
    this._destroyed$.next();
    this._destroyed$.complete();
  }

  scrollToTop() {
    this.pageScrollService.start(this.pageScrollInstance);
    // //use if PageScrollService not installed.
    // (function smoothscroll() {
    //   const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
    //   if (currentScroll > 0) {
    //     window.requestAnimationFrame(smoothscroll);
    //     window.scrollTo(0, currentScroll - currentScroll / 20);
    //   }
    // })();
  }
}
