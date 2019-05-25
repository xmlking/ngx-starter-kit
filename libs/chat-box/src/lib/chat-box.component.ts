import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { scrollFabAnimation } from '@ngx-starter-kit/animations';
import { fromEvent, Observable } from 'rxjs';
import { filter, take, takeUntil } from 'rxjs/operators';
import { Select, Store } from '@ngxs/store';

import { Conversation } from './chat-message.model';
import { ChatBoxState } from './state/chat-box.store';
import { CreateNewConversation, FetchConversations, SendMessage, StartVoiceCommand } from './state/chat-box.actions';

@Component({
  selector: 'ngx-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.scss'],
  animations: [scrollFabAnimation],
})
export class ChatBoxComponent implements OnInit, OnDestroy {
  showChatBox = false;
  typing = false;
  @ViewChild('bottom', {static: true}) bottom: ElementRef;
  @ViewChild('input', {static: true}) input: ElementRef<HTMLInputElement>;

  @Select(ChatBoxState.getConversations) conversations$: Observable<Conversation[]>;
  @Select(ChatBoxState.getActiveConversation) activeConversation$: Observable<Conversation>;
  voices: SpeechSynthesisVoice[];
  canUseSpeechRecognition = false;
  canUseSpeechSynthesis = false;

  constructor(private store: Store) {
    this.canUseSpeechRecognition = this.store.selectSnapshot(ChatBoxState.canUseSpeechRecognition);
    this.canUseSpeechSynthesis = this.store.selectSnapshot(ChatBoxState.canUseSpeechSynthesis);
    this.voices = this.store.selectSnapshot(ChatBoxState.getVoices);
  }

  ngOnInit() {
    this.store.dispatch(new FetchConversations());
    // TODO: only create new Conversation when user select one are more avatars and click +
    if (!this.store.selectSnapshot(ChatBoxState.getActiveConversation)) {
      this.store.dispatch(new CreateNewConversation());
    }
  }

  ngOnDestroy() {}

  private focus() {
    setTimeout(() => {
      this.input.nativeElement.focus();
      if (this.bottom !== undefined) {
        this.bottom.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
      }
      this.checkTyping();
    }, 100);
  }

  async sendMessageToBot() {
    this.store.dispatch(new SendMessage({ message: this.input.nativeElement.value }));
    this.input.nativeElement.value = '';
    this.focus();
  }

  async startTalkingToBot() {
    this.store.dispatch(new StartVoiceCommand());
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
      take(1),
    );

    const typing = keyDowns
      .pipe(
        // map(true),
        takeUntil(enterUp),
      )
      .subscribe(() => (this.typing = true), () => (this.typing = false), () => (this.typing = false));
  }
}
