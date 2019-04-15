import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { MatButtonModule } from '@angular/material/button';

import { ContextMenuTriggerDirective } from './context-menu-trigger.directive';
import { ContextMenuComponent } from './context-menu.component';

@NgModule({
  imports: [CommonModule, PortalModule, OverlayModule, MatButtonModule],
  declarations: [ContextMenuTriggerDirective, ContextMenuComponent],
  exports: [ContextMenuTriggerDirective, ContextMenuComponent],
})
export class ContextMenuModule {}
