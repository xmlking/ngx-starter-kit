import { ResourceQuota as IResourceQuota } from '@ngx-starter-kit/models';
import { Type } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsOptional, Max, Min, ValidateNested } from 'class-validator';
import { Limits } from './limits';
import { Requests } from './requests';

// namespace level hard limits
export class ResourceQuota implements IResourceQuota {
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => Requests)
  requests: Requests;

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => Limits)
  limits: Limits;

  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(10156)
  cpu ? = 1;

  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(10720)
  memory ? = 1;
}
