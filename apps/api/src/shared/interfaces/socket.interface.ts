import { User } from '../../auth';
import { Socket } from 'socket.io';

export interface ISocket extends Socket {
  user: User;
  authInfo: any;
}
