import { trigger, animate, transition, style, state, query } from '@angular/animations';

export const fadeAnimation = trigger('fadeAnimation', [
  transition('* => *', [
    query(':enter', [style({ opacity: 0 })], { optional: true }),
    query(':leave', [style({ opacity: 1 }), animate('0.3s', style({ opacity: 0 }))], { optional: true }),
    query(':enter', [style({ opacity: 0 }), animate('0.3s', style({ opacity: 1 }))], { optional: true }),
  ]),
]);

export const fadeOutAnimation = trigger('fadeOutAnimation', [
  state(
    '*',
    style({
      position: 'absolute',
      'min-width': '100%',
      'min-height': '100%',
      'max-width': '100%',
      display: 'flex',
      'flex-direction': 'column',
      flex: '1',
      height: '100%',
    }),
  ),
  state(
    'void',
    style({
      position: 'absolute',
      'min-width': '100%',
      'min-height': '100%',
      'max-width': '100%',
      display: 'flex',
      'flex-direction': 'column',
      flex: '1',
      height: '100%',
    }),
  ),
  transition('* => void', [
    style({
      opacity: 1,
    }),
    animate(
      '150ms linear',
      style({
        opacity: 0,
      }),
    ),
  ]),
]);
