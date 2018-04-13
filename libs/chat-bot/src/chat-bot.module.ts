import { NgModule } from '@angular/core';
import {SharedModule} from "@nx-starter-kit/shared";
import {ChatBotComponent} from "./components/chat-bot/chat-bot.component";
import {MatButtonModule, MatCardModule, MatFormFieldModule, MatIconModule, MatInputModule} from "@angular/material";

@NgModule({
  imports: [
    SharedModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule
  ],
  declarations: [ChatBotComponent],
  exports: [ChatBotComponent]
})
export class ChatBotModule {}
