import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Observable} from 'rxjs';
import {ChatBotService, Message} from './chat-bot.service';
import {scan} from 'rxjs/operators';
import {scrollFabAnimation} from '@nx-starter-kit/animations';

@Component({
  selector: 'nxtk-chatbot',
  templateUrl: './chat-bot.component.html',
  styleUrls: ['./chat-bot.component.scss'],
  animations: [scrollFabAnimation]
})
export class ChatBotComponent implements OnInit, OnDestroy {
  showChatBox = false;
  formInput = '';
  @ViewChild('bottom') bottom: ElementRef;
  @ViewChild('input') input: ElementRef<HTMLInputElement>;

  messages: Observable<Message[]>;
  canUseSpeechRecognition = false;
  canUseSpeechSynthesis = false;
  public voices: SpeechSynthesisVoice[];
  public selectedVoice: SpeechSynthesisVoice;

  constructor(private chatBotService: ChatBotService) {
    this.canUseSpeechRecognition = chatBotService.canUseSpeechRecognition;
    this.canUseSpeechSynthesis = chatBotService.canUseSpeechSynthesis;
  }

  ngOnInit() {
    if (this.chatBotService.canUseSpeechSynthesis) {
      (async () => {
        this.voices = await this.chatBotService.getVoiceList();
        this.selectedVoice = this.voices[48];
      })()
    }

    this.messages = this.chatBotService.conversation.asObservable().pipe(scan((acc, val) => acc.concat(val)));
  }

  ngOnDestroy() {
  }

  private speak(text: string) {
    if (this.canUseSpeechSynthesis) {
      this.chatBotService.synthesisVoice(text, this.selectedVoice);
    }
  }

  private focus() {
    setTimeout(() => {
      this.input.nativeElement.focus();
      if (this.bottom !== undefined) {
        this.bottom.nativeElement.scrollIntoView()
      }
    }, 100);
  }

  async sendMessageToBot() {
    const res = await this.chatBotService.textConversation(this.formInput);
    this.formInput = '';
    this.focus();
  }

  async startTalkingToBot() {
    try {
      const sentence = await this.chatBotService.voiceConversation();
      const res = await this.chatBotService.textConversation(sentence);
      this.speak(res);
      this.focus();
    } catch (err) {
      console.log(err);
    }
  }

  public toggleChatBox() {
    this.showChatBox = !this.showChatBox;
    if (this.showChatBox) {
      this.focus();
    }
  }
}
