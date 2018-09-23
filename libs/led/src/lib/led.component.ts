import { Attribute, Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-led',
  templateUrl: './led.component.html',
  styleUrls: ['./led.component.scss'],
})
export class LedComponent implements OnInit {
  @Input()
  color: 'red' | 'blue' | 'yellow' | 'green' | 'orange';
  @Input()
  blink = false;
  @Input()
  speed = 1000;
  public size = '24px';
  // @HostBinding('class.active') @Input() active: boolean = false;
  constructor(@Attribute('size') public readonly _size: string) {}

  ngOnInit() {
    if (this._size) {
      this.size = this._size;
    }
  }

  onClick() {
    this.blink = !this.blink;
  }
}
