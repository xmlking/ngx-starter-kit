import { trigger, animate, transition, style, state } from '@angular/animations';

export const rotateAnimation = trigger('rotateAnimation', [
  state('initial', style({ transform: 'rotate(0deg)' })),
  state('rotated', style({ transform: 'rotate(-180deg)' })),
  transition('* => *', [animate('.4s ease')]),
]);
