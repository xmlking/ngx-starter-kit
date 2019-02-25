import { Injectable } from '@nestjs/common';
import { User } from './interfaces/user';

@Injectable()
export class ChatService {
  rooms: string[] = [];
  connectedUsers: User[] = [];

  addConnectedUser(user: User): void {
    this.connectedUsers.push(user);
  }

  removeConnectedUser(user: User): void {
    this.connectedUsers = this.connectedUsers.filter(obj => obj !== user);
  }
}
