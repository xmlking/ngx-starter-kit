import { Transform } from 'class-transformer';
import { ArrayUnique, IsOptional, IsString, IsUrl, MaxLength, MinLength } from 'class-validator';
import { OrderType, PaginationParams } from '../../../core';
import { Subscription } from '../subscription.entity';

export class FindSubscriptionsDto extends PaginationParams<Subscription> {
  @IsOptional()
  @IsString()
  @MinLength(3)
  @MaxLength(20)
  readonly username?: string;

  @IsOptional()
  @IsUrl({}, { message: 'endpoint must be a valid url.' })
  endpoint: string;

  @IsOptional()
  @ArrayUnique()
  @IsString({ each: true })
  @Transform(value => (value ? value.split(',') : []))
  readonly topics?: string[];

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
