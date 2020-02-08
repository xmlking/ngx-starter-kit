import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Component, Inject, OnDestroy } from '@angular/core';
import { scrollFabAnimation } from '@ngx-starter-kit/animations';
import { WINDOW } from '@ngx-starter-kit/core';
import { AutoUnsubscribe } from 'ngx-auto-unsubscribe';
import { PageScrollInstance, PageScrollService } from 'ngx-page-scroll-core';
import { BehaviorSubject, fromEvent } from 'rxjs';
import { distinctUntilChanged, map, share, tap, throttleTime } from 'rxjs/operators';

enum ShowStatus {
  show = 'show',
  hide = 'hide',
}

/** @dynamic */
@AutoUnsubscribe()
@Component({
  selector: 'scroll-to-top',
  templateUrl: './scroll-to-top.component.html',
  styleUrls: ['./scroll-to-top.component.scss'],
  animations: [scrollFabAnimation],
})
export class ScrollToTopComponent implements AfterViewInit, OnDestroy {
  private stateSubject = new BehaviorSubject<string>(ShowStatus.hide);
  state$ = this.stateSubject.asObservable();

  pageScrollInstance: PageScrollInstance;

  constructor(
    private pageScrollService: PageScrollService,
    @Inject(DOCUMENT) private document: any,
    @Inject(WINDOW) private window: Window,
  ) {}

  ngAfterViewInit() {
    this.pageScrollInstance = this.pageScrollService.create({
      document: this.document,
      scrollTarget: '#top',
    });

    const scroll$ = fromEvent(this.window, 'scroll').pipe(
      throttleTime(10),
      map(() => this.window.pageYOffset),
      map(y => {
        if (y > 100) {
          return ShowStatus.show;
        } else {
          return ShowStatus.hide;
        }
      }),
      distinctUntilChanged(),
      share(),
      tap(state => this.stateSubject.next(state)),
    );
    scroll$.subscribe();
  }

  ngOnDestroy() {}

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
