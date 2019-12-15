import { EnvironmentType, Labels as ILabels, ZoneType } from '@ngx-starter-kit/models';
import { IsEnum, IsString } from 'class-validator';

export class Labels implements ILabels {
  @IsEnum(EnvironmentType)
  env: EnvironmentType = EnvironmentType.NonProd;

  @IsEnum(ZoneType)
  zone: ZoneType = ZoneType.Core;

  @IsString()
  name?: string;
}
