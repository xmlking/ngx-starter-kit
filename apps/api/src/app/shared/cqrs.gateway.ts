import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  WsResponse,
} from '@nestjs/websockets';
import { CommandBus, EventBus } from '@nestjs/cqrs';
import { Observable, of } from 'rxjs';
import { Logger, UseGuards } from '@nestjs/common';
import { delay } from 'rxjs/operators';
import { ISocket } from './interfaces/socket.interface';
import { Server } from 'socket.io';
import { WsAuthGuard } from '../auth';
import { User } from '@ngx-starter-kit/models';
import { GenericCommand } from './commands/generic.command';
import { GenericEvent } from './events/generic.event';

// import { UserService } from '../user';

@WebSocketGateway({ namespace: 'eventbus' })
export class CQRSGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  static EVENTS = 'events';
  static COMMANDS = 'actions';
  private readonly logger = new Logger(CQRSGateway.name);

  @WebSocketServer()
  server: Server;
  clients: ISocket[] = [];

  constructor(
    private readonly eventBus: EventBus,
    private readonly commandBus: CommandBus /*private userService: UserService*/,
  ) {}

  afterInit(server) {}

  handleConnection(client: ISocket) {
    // this.logger.log(`Client connected => ${client.id}  ${client.handshake.query.token}`);
    // TODO do auth here
    this.clients.push(client);
  }

  handleDisconnect(client: ISocket) {
    // this.logger.log(`Client disconnected => ${client.id}`);
    // FIXME: remove any. only needed for docker build
    this.clients = this.clients.filter(c => (c as any).id !== (client as any).id);
  }

  @UseGuards(WsAuthGuard)
  @SubscribeMessage('auth')
  onAuthenticate(client: ISocket, data: any) {
    // this.logger.log(`auth  => ${client.id}  ${client.user.username}`);
    const event = 'auth';
    return { event, status: 'success' };
  }

  @SubscribeMessage('test')
  onTest(client: ISocket, data: any): Observable<WsResponse<any>> {
    // this.logger.log(`test  => ${client.id}  ${client.user.username}`);
    const event = 'test';
    // client.broadcast.emit({event, data});
    return of({ event, data }).pipe(delay(1000));
  }

  @SubscribeMessage(CQRSGateway.EVENTS)
  onEvent(client: ISocket, event: any) {
    // this.logger.log(`event  => ${client.id}  ${client.user.username} ${event.type} ${event.payload}`);
    this.eventBus.publish(new GenericEvent(event.type, event.payload , client.user));

  }

  @SubscribeMessage(CQRSGateway.COMMANDS)
  onCommand(client: ISocket, command: any) {
    // this.logger.log(`command  => ${client.id}  ${client.user.username} ${command.type} ${command.payload}`);
    this.commandBus.execute(new GenericCommand(command.type, command.payload, client.user ));
  }

  sendCommandToUser<T>(user: User, action: any): void {
    const clients = this.getSocketsForUser(user);
    const type = this.getActionTypeFromInstance(action);
    // FIXME: remove any. only needed for docker build
    clients.forEach(socket => (socket as any).emit(CQRSGateway.COMMANDS, { ...action, type }));
  }

  sendCommandToAll<T>(action: any): void {
    const type = this.getActionTypeFromInstance(action);
    // FIXME: remove any. only needed for docker build
    this.clients.forEach(socket => (socket as any).emit(CQRSGateway.COMMANDS, { ...action, type }));
  }

  sendEventToUser<T>(user: User, event: any): void {
    const clients = this.getSocketsForUser(user);
    const type = this.getActionTypeFromInstance(event);
    // FIXME: remove any. only needed for docker build
    clients.forEach(socket => (socket as any).emit(CQRSGateway.EVENTS, { ...event, type }));
  }

  sendEventToAll<T>(event: any): void {
    const type = this.getActionTypeFromInstance(event);
    // FIXME: remove any. only needed for docker build
    this.clients.forEach(socket => (socket as any).emit(CQRSGateway.EVENTS, { ...event, type }));
  }


  private getSocketsForUser(user: User): ISocket[] {
    return this.clients.filter(c => c.user && c.user.username === user.username);
  }

  private getActionTypeFromInstance(action: any): string {
    if (action.constructor && action.constructor.type) {
      return action.constructor.type;
    }
    return action.type;
  }
}
