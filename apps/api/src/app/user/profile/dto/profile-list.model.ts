import { IPagination } from '../../../core';
import { Profile } from '../profile.entity';

export class ProfileList implements IPagination<Profile> {
  readonly items: Profile[];
  readonly total: number;
}
