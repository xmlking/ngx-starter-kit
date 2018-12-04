import { ApiModelProperty } from '@nestjs/swagger';
import { ArrayNotEmpty, ArrayUnique } from 'class-validator';

export class UpdateSubscriptionDto {
  @ApiModelProperty({ type: String, isArray: true })
  @ArrayNotEmpty()
  @ArrayUnique()
  topics: string[];
}
