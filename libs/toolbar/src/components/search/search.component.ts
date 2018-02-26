import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'nxtk-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  isOpen: boolean;

  @ViewChild('input') input: ElementRef;

  constructor(private renderer: Renderer2) {}

  ngOnInit() {}

  open() {
    this.isOpen = true;
    setTimeout(() => {
      this.renderer.selectRootElement(this.input.nativeElement).focus();
    }, 100);
  }

  close() {
    this.isOpen = false;
  }
}
