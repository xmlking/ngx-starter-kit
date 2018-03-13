import {Component, ChangeDetectionStrategy, HostListener, HostBinding} from '@angular/core';

@Component({
  selector: 'df-context-menu',
  templateUrl: './context-menu.component.html',
  styleUrls: ['./context-menu.component.scss'],
  // host: {
  //   class: 'mat-elevation-z2'
  // },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContextMenuComponent {
  @HostBinding('class.mat-elevation-z2') public elevation = true;
}
