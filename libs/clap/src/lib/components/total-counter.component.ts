import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-total-counter',
  template: `
    {{ counter }}
  `,
  styles: [
    `
      :host {
        background-color: transparent;
        color: rgba(0, 0, 0, 0.6);
        position: absolute;
        left: calc(50% - 16px);
        top: -32px;
        font-size: 14px;
        text-align: center;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TotalCounterComponent {
  @Input()
  counter: string;
}
