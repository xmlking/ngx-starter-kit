import { animate, animation, keyframes, style } from '@angular/animations';

export const pulseAnimation = animation([
  style({ transform: 'scale(1)' }),
  animate(
    '{{ timings }}',
    keyframes([
      style({ transform: 'scale(1)', offset: 0 }),
      style({ transform: 'scale({{ scale }})', offset: 0.5 }),
      style({ transform: 'scale(1)', offset: 1 })
    ])
  )
]);

export const slideInAnimation = animation([
  style({ transform: 'translateY({{ from }})', opacity: 0 }),
  animate('{{ timings }}', style('*'))
]);

export const slideOutAnimation = animation([
  animate(
    '{{ timings }}',
    style({ transform: 'translateY({{ to }})', opacity: 0 })
  )
]);
