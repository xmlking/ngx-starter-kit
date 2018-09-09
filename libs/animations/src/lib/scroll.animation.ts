import { trigger, animate, transition, style, state } from '@angular/animations';

export const scrollAnimation = trigger('scrollAnimation', [
  state('show', style({ opacity: 1, transform: 'translateX(0)' })),
  state('hide', style({ opacity: 0, transform: 'translateX(-100%)' })),
  transition('show => hide', animate('700ms ease-out')),
  transition('hide => show', animate('700ms ease-in')),
]);
