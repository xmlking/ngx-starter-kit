import { ApiModelProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class UpdateSubscriptionDto {
  @ApiModelProperty({ type: String, isArray: true })
  @IsNotEmpty()
  topics: string[];
}
