import { Component, ChangeDetectionStrategy, HostListener, HostBinding } from '@angular/core';

@Component({
  selector: 'context-menu',
  templateUrl: './context-menu.component.html',
  styleUrls: ['./context-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContextMenuComponent {
  @HostBinding('class.mat-elevation-z2')
  public elevation = true;
}
