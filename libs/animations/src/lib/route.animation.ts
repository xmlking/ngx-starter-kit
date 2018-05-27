import {
  trigger,
  animate,
  transition,
  style,
  query
} from '@angular/animations';

export const routeAnimation = trigger('routeAnimation', [
  transition('* <=> *', [
    // Initial state of new route
    query(
      ':enter',
      style({
        position: 'fixed',
        width: '100%',
        transform: 'translateX(-100%)'
      }),
      { optional: true }
    ),
    // move page off screen right on leave
    query(
      ':leave',
      animate(
        '500ms ease',
        style({
          position: 'fixed',
          width: '100%',
          transform: 'translateX(100%)'
        })
      ),
      {
        optional: true
      }
    ),
    // move page in screen from left to right
    query(
      ':enter',
      animate('500ms ease', style({ opacity: 1, transform: 'translateX(0%)' })),
      { optional: true }
    )
  ])
]);


export const routeAnimation2 = trigger('routeAnimation', [
  transition('void => *', [
    style({
      opacity: 0,
    }),
    animate('400ms 150ms ease-in-out', style({
      opacity: 1,
    }))
  ]),
]);
