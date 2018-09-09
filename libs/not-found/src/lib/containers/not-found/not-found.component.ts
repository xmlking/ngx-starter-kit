import { Component, OnDestroy, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'ngx-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
})
export class NotFoundComponent implements OnInit, OnDestroy {
  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    this.renderer.removeClass(document.body, 'mat-typography');
  }
  ngOnDestroy(): void {
    this.renderer.addClass(document.body, 'mat-typography');
  }
}
