import { IPagination } from '../../../core'
import { Profile } from '../profile.entity';
import { ApiModelProperty } from '@nestjs/swagger';

export class ProfileList implements IPagination<Profile> {
  @ApiModelProperty({ type: Profile, isArray: true })
  readonly items: Profile[];
  @ApiModelProperty({ type: Number, readOnly: true })
  readonly total: number;
}
