import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  MatBadgeModule,
  MatButtonModule,
  MatCardModule,
  MatDividerModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatRippleModule,
  MatSelectModule,
  MatTabsModule,
  MatToolbarModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DraggableModule } from '@nx-starter-kit/draggable';
import { LedModule } from '@nx-starter-kit/led';

import { ChatBotComponent } from './chat-bot.component';
import { ChatBotService } from './chat-bot.service';

@NgModule({
  imports: [
    CommonModule,
    DraggableModule,
    LedModule,
    FormsModule,
    FlexLayoutModule,
    MatSelectModule,
    MatToolbarModule,
    MatRippleModule,
    MatBadgeModule,
    MatButtonModule,
    MatInputModule,
    MatListModule,
    MatCardModule,
    MatTabsModule,
    MatIconModule,
    MatDividerModule,
    MatFormFieldModule
  ],
  declarations: [ChatBotComponent],
  exports: [ChatBotComponent],
  providers: [ChatBotService]
})
export class ChatBotModule {}
