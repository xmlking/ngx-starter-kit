import { OrderType, PaginationParams } from '../../../core';
import { Subscription } from '../subscription.entity';
import { ApiModelPropertyOptional } from '@nestjs/swagger';
import { ArrayUnique, IsOptional, IsString, IsUrl } from 'class-validator';
import { Transform } from 'class-transformer';

export class FindSubscriptionsDto extends PaginationParams<Subscription> {
  @ApiModelPropertyOptional({ type: String, minLength: 3, maxLength: 20 })
  @IsOptional()
  @IsString()
  readonly username?: string;

  @ApiModelPropertyOptional({ type: String })
  @IsOptional()
  @IsUrl({}, { message: 'endpoint must be a valid url.' })
  endpoint: string;

  @ApiModelPropertyOptional({ type: String, isArray: true })
  @IsOptional()
  @ArrayUnique()
  @IsString({ each: true })
  @Transform(value => value ? value.split(',') : [])
  readonly topics?: string[];

  @ApiModelPropertyOptional({ type: String, enum: ['ASC', 'DESC'] })
  @IsOptional()
  @Transform((val: string) => ({ createdAt: val === OrderType.ASC ? OrderType.ASC : OrderType.DESC }))
  readonly order = {
    createdAt: OrderType.DESC,
  };

  constructor(values: Partial<FindSubscriptionsDto>) {
    super();
    Object.assign(this, values);
  }
}
