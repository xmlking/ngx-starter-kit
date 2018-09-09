import { transition, trigger, useAnimation } from '@angular/animations';
import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';
import { pulseAnimation } from '../animations';

@Component({
  selector: 'ngx-fab',
  template: `
    <i class="material-icons">pan_tool</i>
  `,
  styles: [
    `
      :host {
        border: 1px solid rgba(0, 0, 0, 0.7);
        color: #02b875;
        width: 64px;
        height: 64px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        user-select: none;
        box-shadow: 2px 2px 7px 0px rgba(0, 0, 0, 0.6);
      }
    `,
  ],
  animations: [
    trigger('counterChange', [
      transition(
        ':increment',
        useAnimation(pulseAnimation, {
          params: {
            timings: '400ms cubic-bezier(.11,.99,.83,.43)',
            scale: 1.05,
          },
        }),
      ),
    ]),
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FabComponent {
  @HostBinding('@counterChange')
  @Input()
  counter: number;
}
