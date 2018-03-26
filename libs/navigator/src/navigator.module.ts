import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuService } from './services/menu.service';

@NgModule({
  imports: [CommonModule],
  providers: [MenuService]
})
export class NavigatorModule {}
