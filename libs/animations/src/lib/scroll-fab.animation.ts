import { trigger, animate, transition, style, state } from '@angular/animations';

export const scrollFabAnimation = trigger('scrollAnimation', [
  state('show', style({ opacity: 1, transform: 'scale(1)' })),
  state('hide', style({ opacity: 0, transform: 'scale(0)' })),
  transition('show => hide', animate('500ms ease-out')),
  transition('hide => show', animate('500ms ease-in')),
]);
