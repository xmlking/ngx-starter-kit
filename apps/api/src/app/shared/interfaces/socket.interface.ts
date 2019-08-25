import { Socket } from 'socket.io';
import { User, JwtToken } from '@ngx-starter-kit/models';

export interface ISocket extends Socket {
  user: User;
  authInfo: JwtToken;
}
