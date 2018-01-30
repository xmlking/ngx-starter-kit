import { trigger, animate, transition, style } from '@angular/animations';

export const fadeAnimation = trigger('fadeAnimation', [
  transition(':enter', [style({ opacity: 0 }), animate('.4s ease', style({ opacity: '*' }))]),
  transition(':leave', [animate('.4s ease', style({ opacity: 0 }))])
]);
