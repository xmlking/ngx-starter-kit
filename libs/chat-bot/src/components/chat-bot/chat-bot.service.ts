import { Injectable } from '@angular/core';
import { ApiAiClient } from 'api-ai-javascript';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import {environment} from "@env/environment";

export class Message {
  constructor(public content: string, public sentBy: string) { }
}

@Injectable()
export class ChatBotService {
  readonly client = new ApiAiClient({ accessToken: environment.dialogFlow.apiToken });
  constructor() { }
  conversation = new BehaviorSubject<Message[]>([]);
  talk(msg: string) {
    const userMessage = new Message(msg, 'user');
    this.update(userMessage);
    return this.client.textRequest(msg)
      .then(res => {
        const speech = res.result.fulfillment.speech;
        const botMessage = new Message(speech, 'bot');
        this.update(botMessage);
      });
  }
  // Adds message to source
  update(msg: Message) {
    this.conversation.next([msg]);
  }

}
