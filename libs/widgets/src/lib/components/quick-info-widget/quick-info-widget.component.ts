import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-quick-info-widget',
  templateUrl: './quick-info-widget.component.html',
  styleUrls: ['./quick-info-widget.component.scss'],
})
export class QuickInfoWidgetComponent implements OnInit {
  @Input()
  value: string;
  @Input()
  label: string;
  @Input()
  background: string;
  @Input()
  color: string;

  @Input()
  icon: string;

  constructor() {}

  ngOnInit() {}
}
