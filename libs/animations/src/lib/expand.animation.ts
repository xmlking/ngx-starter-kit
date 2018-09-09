import { trigger, animate, transition, style } from '@angular/animations';

export const expandAnimation = trigger('expandAnimation', [
  transition(':enter', [style({ height: 0 }), animate('.4s ease', style({ height: '*' }))]),
  transition(':leave', [animate('.4s ease', style({ height: 0 }))]),
]);
