import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'ngx-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  isOpen: boolean;

  @ViewChild('input', { read: ElementRef, static: true }) input: ElementRef;

  constructor() {}

  ngOnInit() {}

  open() {
    this.isOpen = true;

    setTimeout(() => {
      this.input.nativeElement.focus();
    }, 100);
  }

  close() {
    this.isOpen = false;
  }
}
