import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs/index";
import {ChatBotService, Message} from "./chat-bot.service";
import {scan} from "rxjs/operators";
import {scrollFabAnimation} from "@nx-starter-kit/animations";

@Component({
  selector: 'nxtk-chatbot',
  templateUrl: './chat-bot.component.html',
  styleUrls: ['./chat-bot.component.scss'],
  animations: [scrollFabAnimation],
  providers: [ChatBotService]
})
export class ChatBotComponent implements OnInit {
  showChat = false;
  reponseMessage: void;
  formInput: string;
  messages: Observable<Message[]>;
  constructor(private chatBotService: ChatBotService) { }

  ngOnInit() {
    this.messages = this.chatBotService.conversation.asObservable().pipe(
      scan((acc, val) => acc.concat(val))
    )
  }

  // ngOnDestroy() {
  //   this.chatService.destroyVoiceConversation();
  // }

  sendMessageToBot() {
    this.chatBotService.talk(this.formInput);
    this.formInput = '';
  }

  startTalkingToBot() {
    // this.chatService.voiceConversation()
    //   .subscribe(
    //     (value) => {
    //       this.formInput = value;
    //       // console.log(value);
    //     },
    //     (err) => {
    //       console.log(err);
    //       if (err.error  === 'no-speech') {
    //         // console.log("Talking error");
    //         this.startTalkingToBot();
    //       }
    //     },
    //     () => {
    //       // console.log("Talking complete");
    //       this.startTalkingToBot();
    //     });
  }
}
