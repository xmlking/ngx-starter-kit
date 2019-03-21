import { Image } from './image.model';
import { Profile } from './profile.model';

export interface User {
  id?: number | string;
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  images?: Image[];
  profile?: Profile;
  readonly profileId?: number;
  readonly createdAt?: Date;
  readonly updatedAt?: Date;
}
