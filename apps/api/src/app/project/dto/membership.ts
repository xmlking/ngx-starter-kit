import { ArrayNotEmpty, ArrayUnique, IsArray, IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';
import { Membership as IMembership, MembershipType, RoleType } from '@ngx-starter-kit/models';

export class Membership implements IMembership {
  @ApiModelProperty({ type: String })
  @IsString()
  @IsNotEmpty()
  // @Matches(/^NGX_K8S_/) // TODO: if type===group then check pattern
  name: string;

  @ApiModelProperty({ type: String, enum: MembershipType })
  @IsEnum(MembershipType)
  type: MembershipType;

  @ApiModelProperty({ type: RoleType, enum: RoleType, isArray: true })
  @IsArray()
  @ArrayNotEmpty()
  @ArrayUnique()
  @IsEnum(RoleType, { each: true })
  roles: Set<RoleType>;
}
