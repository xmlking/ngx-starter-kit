import { trigger, transition, state, group, query, style, animate, animateChild } from '@angular/animations';

export const routeAnimation = trigger('routeAnimation', [
  transition('* <=> *', [
    // Initial state of new route
    query(
      ':enter',
      style({
        position: 'fixed',
        width: '100%',
        transform: 'translateX(-100%)',
      }),
      { optional: true },
    ),
    // move page off screen right on leave
    query(
      ':leave',
      animate(
        '500ms ease',
        style({
          position: 'fixed',
          width: '100%',
          transform: 'translateX(100%)',
        }),
      ),
      {
        optional: true,
      },
    ),
    // move page in screen from left to right
    query(':enter', animate('500ms ease', style({ opacity: 1, transform: 'translateX(0%)' })), { optional: true }),
  ]),
]);

export const hierarchicalRouteAnimation = trigger('routeAnimation', [
  transition(':increment', [
    style({ height: '!' }),
    query(':enter', style({ transform: 'translateX(100%)' }), {optional: true}),
    query(':enter, :leave', style({ position: 'absolute', top: 0, left: 0, right: 0 }), {optional: true}),
    // animate the leave page away
    group([
      query(':leave', [animate('0.3s cubic-bezier(.35,0,.25,1)', style({ transform: 'translateX(-100%)' }))], {optional: true}),
      // and now reveal the enter
      query(':enter', animate('0.3s cubic-bezier(.35,0,.25,1)', style({ transform: 'translateX(0)' })), {optional: true}),
      // query('@fadeAnimation', animateChild(), {optional: true}),
    ]),
  ]),
  transition(':decrement', [
    style({ height: '!' }),
    query(':enter', style({ transform: 'translateX(-100%)' }), {optional: true}),
    query(':enter, :leave', style({ position: 'absolute', top: 0, left: 0, right: 0 }), {optional: true}),
    // animate the leave page away
    group([
      query(':leave', [animate('0.3s cubic-bezier(.35,0,.25,1)', style({ transform: 'translateX(100%)' }))], {optional: true}),
      // and now reveal the enter
      query(':enter', animate('0.3s cubic-bezier(.35,0,.25,1)', style({ transform: 'translateX(0)' })), {optional: true}),
      // query('@fadeAnimation', animateChild() , {optional: true}),
    ]),
  ]),
]);
