import { trigger, animate, transition, style, state } from '@angular/animations';
import { SidenavState } from '@ngx-starter-kit/navigator';

export const sidenavAnimation = trigger('sidenavAnimation', [
  state(SidenavState.Collapsed, style({ position: 'absolute', width: '66px' })),
  state(SidenavState.CollapsedHover, style({ position: 'absolute', width: '270px' })),
  state(SidenavState.Expanded, style({ position: 'relative', width: '270px' })),
  state(
    SidenavState.Mobile,
    style({
      position: 'absolute',
      width: '270px',
      transform: 'translate3d(-270px, 0, 0)',
      visibility: 'hidden',
    }),
  ),
  state(
    SidenavState.MobileOpen,
    style({
      position: 'absolute',
      width: '270px',
      transform: 'translate3d(0, 0, 0)',
      visibility: 'visible',
    }),
  ),
  transition(`${SidenavState.Expanded} => ${SidenavState.CollapsedHover}`, [
    style({ position: 'absolute' }),
    animate('300ms cubic-bezier(.35, 0, .25, 1)'),
  ]),
  transition(`${SidenavState.Expanded} => ${SidenavState.Collapsed}`, [
    style({ position: 'absolute' }),
    animate('300ms cubic-bezier(.35, 0, .25, 1)'),
  ]),
  transition(`${SidenavState.CollapsedHover} => ${SidenavState.Collapsed}`, [
    animate('300ms cubic-bezier(.35, 0, .25, 1)'),
  ]),
  transition(
    `${SidenavState.Collapsed} => ${SidenavState.CollapsedHover}`,
    animate('300ms cubic-bezier(.35, 0, .25, 1)'),
  ),
  transition(`${SidenavState.Mobile} => ${SidenavState.MobileOpen}`, animate('300ms cubic-bezier(.35, 0, .25, 1)')),
  transition(`${SidenavState.MobileOpen} => ${SidenavState.Mobile}`, animate('300ms cubic-bezier(.35, 0, .25, 1)')),
]);

export const dropdownAnimation = trigger('dropdownAnimation', [
  state('collapsed', style({ height: 0 })),
  state('expanded', style({ height: '*' })),
  transition('collapsed <=> expanded', [animate('400ms cubic-bezier(.35, 0, .25, 1)')]),
]);
