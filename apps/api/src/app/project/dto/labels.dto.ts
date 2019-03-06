import { IsEnum, IsString } from 'class-validator';
import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';
import { EnvironmentType, Labels as ILabels, ZoneType } from '@ngx-starter-kit/models';

export class Labels implements ILabels {
  @ApiModelProperty({ type: String, enum: EnvironmentType, default: EnvironmentType.NonProd })
  @IsEnum(EnvironmentType)
  env: EnvironmentType;

  @ApiModelProperty({ type: String, enum: ZoneType, default: ZoneType.Core })
  @IsEnum(ZoneType)
  zone: ZoneType;

  @ApiModelPropertyOptional({ type: String })
  @IsString()
  name?: string;
}
