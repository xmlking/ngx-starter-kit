import { Component, ElementRef, NgZone, OnInit } from '@angular/core';
import Scrollbar from 'smooth-scrollbar';
import { scrollbarOptions } from './scrollbar-options';

@Component({
  selector: 'ngx-scrollbar',
  templateUrl: './scrollbar.component.html',
  styleUrls: ['./scrollbar.component.scss'],
})
export class ScrollbarComponent implements OnInit {
  scrollbarRef: Scrollbar;
  element: ElementRef;

  constructor(private elementPrivate: ElementRef, private zone: NgZone) {}

  ngOnInit() {
    this.element = this.elementPrivate;

    const options = scrollbarOptions;

    this.zone.runOutsideAngular(() => {
      this.scrollbarRef = Scrollbar.init(this.element.nativeElement, options);
    });
  }
}
