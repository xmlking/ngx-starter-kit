import { Image } from './image.model';
import { Gender } from './gender.enum';

export interface Profile {
  id?: string;
  avatar?: Image;
  gender?: Gender;
  mobilePhone?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
