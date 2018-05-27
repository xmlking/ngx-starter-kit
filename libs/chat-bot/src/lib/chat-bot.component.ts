import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { ChatBotService, Message } from './chat-bot.service';
import { filter, scan, take, takeUntil } from 'rxjs/operators';
import { scrollFabAnimation } from '@ngx-starter-kit/animations';

@Component({
  selector: 'ngx-chatbot',
  templateUrl: './chat-bot.component.html',
  styleUrls: ['./chat-bot.component.scss'],
  animations: [scrollFabAnimation],
  providers: [ChatBotService]
})
export class ChatBotComponent implements OnInit, OnDestroy {
  showChatBox = false;
  typing = false;
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
      })();
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
        this.bottom.nativeElement.scrollIntoView();
      }
      this.checkTyping();
    }, 100);
  }

  async sendMessageToBot() {
    const res = await this.chatBotService.textConversation(this.input.nativeElement.value);
    this.input.nativeElement.value = '';
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


  checkTyping() {
    console.log('in checkTyping');
    const keyDowns = fromEvent<KeyboardEvent>(this.input.nativeElement, 'keydown');
    const enterUp = fromEvent<KeyboardEvent>(this.input.nativeElement, 'keyup').pipe(
      filter((x: any) => x.key === 'Enter'),
      take(1)
    );

    const typing = keyDowns.pipe(
      // map(true),
      takeUntil(enterUp)
    ).subscribe(
      () => this.typing = true,
      () => this.typing = false,
      () => this.typing = false
    );
  }
}
