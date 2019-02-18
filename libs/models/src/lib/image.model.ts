import { User } from './user.model';
import { ImageType } from './image-type.enum';

export interface Image {
  id?: number | string;
  title: string;
  type: ImageType;
  user: User;
  createdAt?: Date;
  data?: Buffer;
  checksum?: string;
  mimeType?: string;
  size?: number;
  url?: string;
}
