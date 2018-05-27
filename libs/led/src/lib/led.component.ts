import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-led',
  templateUrl: './led.component.html',
  styleUrls: ['./led.component.scss']
})
export class LedComponent implements OnInit {
  @Input() color: 'red' | 'blue' | 'yellow' | 'green' | 'orange';
  @Input() blink = false;
  @Input() speed = 1000;
  @Input() size = '24px';
  // @HostBinding('class.active') @Input() active: boolean = false;
  constructor() {}

  ngOnInit() {}

  onClick() {
    this.blink = !this.blink;
  }
}
