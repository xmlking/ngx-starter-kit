import { transition, trigger, useAnimation } from '@angular/animations';
import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';
import { pulseAnimation, slideInAnimation, slideOutAnimation } from '../animations';

@Component({
  selector: 'ngx-counter-bubble',
  template: `
    +{{ counter }}
  `,
  styles: [
    `
      :host {
        background-color: #02b875;
        color: white;
        position: absolute;
        width: 42px;
        height: 42px;
        left: calc(50% - 21px);
        top: -64px;
        font-size: 12px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('visibilityChange', [
      transition(':enter', [
        useAnimation(slideInAnimation, {
          params: { from: '20%', timings: '200ms ease-in' },
        }),
      ]),
      transition(':leave', [
        useAnimation(slideOutAnimation, {
          params: { to: '-200%', timings: '200ms ease-in' },
        }),
      ]),
    ]),
    trigger('counterChange', [
      transition(
        ':increment',
        useAnimation(pulseAnimation, {
          params: {
            timings: '200ms',
            scale: 1.2,
          },
        }),
      ),
    ]),
  ],
})
export class CounterBubbleComponent {
  @HostBinding('@counterChange')
  @Input()
  counter: number;

  @HostBinding('@visibilityChange')
  animation = true;
}
