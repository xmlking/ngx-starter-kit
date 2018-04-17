import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs/index';
import { ChatBotService, Message } from './chat-bot.service';
import { scan } from 'rxjs/operators';
import { scrollFabAnimation } from '@nx-starter-kit/animations';

@Component({
  selector: 'nxtk-chatbot',
  templateUrl: './chat-bot.component.html',
  styleUrls: ['./chat-bot.component.scss'],
  animations: [scrollFabAnimation],
  providers: [ChatBotService]
})
export class ChatBotComponent implements OnInit, OnDestroy {
  showChat = false;
  formInput = '';
  messages: Observable<Message[]>;
  canUseSpeechRecognition = false;
  canUseSpeechSynthesis = false;
  public voices: SpeechSynthesisVoice[];
  public selectedVoice: SpeechSynthesisVoice;
  constructor(private chatBotService: ChatBotService) {
    this.canUseSpeechRecognition = chatBotService.canUseSpeechRecognition;
    this.canUseSpeechSynthesis = chatBotService.canUseSpeechSynthesis;
  }

  async ngOnInit() {
    if (this.chatBotService.canUseSpeechSynthesis) {
      this.voices = await this.chatBotService.getVoiceList();
      console.log(this.voices[48]);
      this.selectedVoice = this.voices[48];
    }

    this.messages = this.chatBotService.conversation.asObservable().pipe(scan((acc, val) => acc.concat(val)));
  }

  ngOnDestroy() {}

  private speak(text: string) {
    if (this.canUseSpeechSynthesis) {
      this.chatBotService.synthesisVoice(text, this.selectedVoice);
    }
  }

  async sendMessageToBot() {
    const res = await this.chatBotService.textConversation(this.formInput);
    this.formInput = '';
  }

  async startTalkingToBot() {
    try {
      const sentence = await this.chatBotService.voiceConversation();
      const res = await this.chatBotService.textConversation(sentence);
      this.speak(res);
    } catch (err) {
      console.log(err);
    }
  }
}
