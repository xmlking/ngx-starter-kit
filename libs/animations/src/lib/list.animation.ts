import { animate, sequence, style, transition, trigger } from '@angular/animations';

export const listFadeAnimation = trigger('listFade', [
  transition(':leave', [
    style({ height: '*', opacity: '1', transform: 'translateX(0)' }),
    sequence([
      animate('250ms ease', style({ height: '*', opacity: 0, transform: 'translateX(50px)' })),
      animate('100ms ease', style({ height: '0', opacity: 0, transform: 'translateX(50px)' })),
    ]),
  ]),
  transition(':enter', [
    style({ height: '0', opacity: '0', transform: 'translateX(50px)' }),
    animate('350ms 350ms ease', style({ height: '*', opacity: 1, transform: 'translateX(0)' })),
  ]),
]);
