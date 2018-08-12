import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';
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
  MatToolbarModule,
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DraggableModule } from '@ngx-starter-kit/draggable';
import { LedModule } from '@ngx-starter-kit/led';

import { NlpService } from './services/nlp.service';
import { ChatService } from './services/chat.service';
import { TextToSpeechService } from './services/text-to-speech.service';
import { SpeechToTextService } from './services/speech-to-text.service';
import { ChatBoxComponent } from './chat-box.component';
import { TypingIndicatorComponent } from './components/typing-indicator/typing-indicator.component';
import { ChatCardComponent } from './components/chat-card/chat-card.component';

import { DIALOGFLOW_TOKEN } from './services/inject-tokens';

import { ChatBoxState } from './state/chat-box.store';

export interface DialogFlowTokenInterface {
  accessToken: string;
}

@NgModule({
  imports: [
    CommonModule,
    DraggableModule,
    LedModule,
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
    MatFormFieldModule,
    NgxsModule.forFeature([ChatBoxState]),
  ],
  declarations: [ChatBoxComponent, TypingIndicatorComponent, ChatCardComponent],
  exports: [ChatBoxComponent],
  providers: [ChatService, NlpService, TextToSpeechService, SpeechToTextService],
})
export class ChatBoxModule {
  static forRoot(config: DialogFlowTokenInterface): ModuleWithProviders {
    return {
      ngModule: ChatBoxModule,
      providers: [
        {
          provide: DIALOGFLOW_TOKEN,
          useValue: config.accessToken,
        },
      ],
    };
  }
}
