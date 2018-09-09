import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ngx-loading-overlay',
  templateUrl: './loading-overlay.component.html',
  styleUrls: ['./loading-overlay.component.scss'],
})
export class LoadingOverlayComponent implements OnInit {
  @Input()
  isLoading: boolean;

  constructor() {}

  ngOnInit() {}
}
