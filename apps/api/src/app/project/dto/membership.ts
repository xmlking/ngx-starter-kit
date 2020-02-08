import { Membership as IMembership, MembershipType, RoleType } from '@ngx-starter-kit/models';
import { ArrayNotEmpty, ArrayUnique, IsArray, IsEnum, IsNotEmpty, IsString } from 'class-validator';

export class Membership implements IMembership {
  @IsString()
  @IsNotEmpty()
  // @Matches(/^NGX_K8S_/) // TODO: if type===group then check pattern
  name: string;

  @IsEnum(MembershipType)
  type: MembershipType;

  @IsArray()
  @ArrayNotEmpty()
  @ArrayUnique()
  @IsEnum(RoleType, { each: true })
  roles: Set<RoleType>;
}
