import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxsModule } from '@ngxs/store';
import { NgxsFormPluginModule } from '@ngxs/form-plugin';

import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatRippleModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DraggableModule } from '@ngx-starter-kit/draggable';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { LedModule } from '@ngx-starter-kit/led';

import { NlpService } from './services/nlp.service';
import { ChatService } from './services/chat.service';
import { TextToSpeechService } from './services/text-to-speech.service';
import { SpeechToTextService } from './services/speech-to-text.service';
import { ChatBoxComponent } from './chat-box.component';
import { TypingIndicatorComponent } from './components/typing-indicator/typing-indicator.component';
import { TextToSpeechPreferencesComponent } from './components/text-to-speech-preferences/text-to-speech-preferences.component';
import { ChatCardComponent } from './components/chat-card/chat-card.component';

import { DIALOGFLOW_TOKEN } from './services/inject-tokens';

import { ChatBoxState } from './state/chat-box.store';

export interface DialogFlowTokenInterface {
  accessToken: string;
}

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DraggableModule,
    DragDropModule,
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
    MatSidenavModule,
    MatSliderModule,
    MatDividerModule,
    MatFormFieldModule,
    MatExpansionModule,
    NgxsModule.forFeature([ChatBoxState]),
    NgxsFormPluginModule,
  ],
  declarations: [ChatBoxComponent, TypingIndicatorComponent, ChatCardComponent, TextToSpeechPreferencesComponent],
  exports: [ChatBoxComponent],
  providers: [ChatService, NlpService, TextToSpeechService, SpeechToTextService],
})
export class ChatBoxModule {
  static forRoot(config: DialogFlowTokenInterface): ModuleWithProviders<ChatBoxModule> {
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
