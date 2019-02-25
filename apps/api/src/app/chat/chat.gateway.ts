import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  WsResponse,
} from '@nestjs/websockets';
import { Observable, of } from 'rxjs';
import { Message } from './interfaces/message';
import { User } from './interfaces/user';
import { ChatService } from './chat.service';

export enum ChatEvents {
  CONNECTED = 'connected',
  DISCONNECTED = 'disconnected',
  NEW_MESSAGE = 'newMessage',
  IS_WRITING = 'isWriting',
  IS_NOT_WRITING = 'isNotWriting',
}
// https://github.com/djjorik/angular-chat/blob/master/server/events.gateway.ts
@WebSocketGateway({ namespace: 'chat' })
export class ChatGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server;

  constructor(private chatService: ChatService) {}

  afterInit(server) {}

  handleConnection(client) {
    const event = 'connected';
    client.emit(event, { message: 'Hello...' });
    client.broadcast.emit(event, {
      message: `${client.client.conn.id} connected`,
    });
    // this.chatService.addConnectedUser()
  }
  handleDisconnect(client) {
    const event = 'disconnected';
    client.broadcast.emit(event, {
      message: `${client.client.conn.id} disconnected`,
    });
    // this.chatService.removeConnectedUser();
  }

  @SubscribeMessage('messages')
  onMessage(client: any, data: Message): Observable<WsResponse<Message>> {
    const event = 'newMessage';
    client.broadcast.emit({ event, data });
    return of({ event, data });
  }

  @SubscribeMessage('isWriting')
  handleIsWriting(client, data: User) {
    const event = 'isWriting';
    client.broadcast.emit({ event, data });
  }

  @SubscribeMessage('isNotWriting')
  handleIsNotWriting(client) {
    const event = 'isNotWriting';
    client.broadcast.emit({ event });
  }
}

// https://github.com/Pinedo11/nestDemo-ChatServer/tree/master/src/chat
// https://pusher.com/tutorials/chat-bot-nestjs
// redis  https://github.com/chanlito/simple-todos/blob/master/server/app/app.gateway.ts
