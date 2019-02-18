import { Image } from './image.model';
import { Profile } from './profile.model';

export interface User {
  id?: number | string;
  firstName: string;
  lastName: string;
  email: string;
  userId: string;
  createdAt?: Date;
  updatedAt?: Date;
  images?: Image[];
  profile?: Profile;
  profileId?: number;
}
