import { IsNotEmpty, IsNumber, IsOptional, Max, Min, ValidateNested } from 'class-validator';
import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { Requests } from './requests';
import { Limits } from './limits';
import { ResourceQuota as IResourceQuota } from '@ngx-starter-kit/models';

// namespace level hard limits
export class ResourceQuota implements IResourceQuota {
  @ApiModelProperty({ type: Requests })
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => Requests)
  requests: Requests;

  @ApiModelProperty({ type: Limits })
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => Limits)
  limits: Limits;

  @ApiModelPropertyOptional({ type: Number, default: 1 })
  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(10156)
  cpu?: number;

  @ApiModelPropertyOptional({ type: Number, default: 1 })
  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(10720)
  memory?: number;
}
