import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { scrollFabAnimation } from '@nx-starter-kit/animations';
import { PageScrollConfig, PageScrollService, PageScrollInstance } from 'ngx-page-scroll';

@Component({
  selector: 'scroll-to-top',
  templateUrl: './scroll-to-top.component.html',
  styleUrls: ['./scroll-to-top.component.scss'],
  animations: [scrollFabAnimation]
})
export class ScrollToTopComponent implements OnInit {
  state = 'hide';
  pageScrollInstance: PageScrollInstance;

  constructor(private pageScrollService: PageScrollService, @Inject(DOCUMENT) private document: Document) {}

  ngOnInit() {
    this.pageScrollInstance = PageScrollInstance.simpleInstance(this.document, '#top');
  }

  @HostListener('document:scroll')
  onWindowScroll() {
    if (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop > 100) {
      this.state = 'show';
    } else if (
      (this.state === 'show' && window.pageYOffset) ||
      document.documentElement.scrollTop ||
      document.body.scrollTop < 10
    ) {
      this.state = 'hide';
    }
  }

  scrollToTop() {
    this.pageScrollService.start(this.pageScrollInstance);
    //TODO if PageScrollService not use default scrolling
    // (function smoothscroll() {
    //   const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
    //   if (currentScroll > 0) {
    //     window.requestAnimationFrame(smoothscroll);
    //     window.scrollTo(0, currentScroll - currentScroll / 5);
    //   }
    // })();
  }
}
