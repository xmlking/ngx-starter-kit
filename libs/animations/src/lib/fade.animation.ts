import {trigger, animate, transition, style, state} from '@angular/animations';

export const fadeAnimation = trigger('fadeAnimation', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('.4s ease', style({ opacity: '*' }))
  ]),
  transition(':leave', [animate('.4s ease', style({ opacity: 0 }))])
]);


export const fadeOutAnimation = trigger('fadeOutAnimation', [
  state('*', style({
    position: 'absolute',
    'min-width': '100%',
    'min-height': '100%',
    'max-width': '100%',
    display: 'flex',
    'flex-direction': 'column',
    flex: '1',
    height: '100%'
  })),
  state('void', style({
    position: 'absolute',
    'min-width': '100%',
    'min-height': '100%',
    'max-width': '100%',
    display: 'flex',
    'flex-direction': 'column',
    flex: '1',
    height: '100%'
  })),
  transition('* => void', [
    style({
      opacity: 1,
    }),
    animate('150ms linear', style({
      opacity: 0,
    }))
  ]),
]);
