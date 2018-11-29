import { ApiModelProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsUrl } from 'class-validator';

export class CreateSubscriptionDto {
  @ApiModelProperty({ type: String })
  @IsNotEmpty()
  @IsUrl({}, { message: 'endpoint must be a valid url.' })
  endpoint: string;

  @ApiModelProperty({ type: String })
  @IsNotEmpty()
  @IsString()
  auth: string;

  @ApiModelProperty({ type: String })
  @IsNotEmpty()
  @IsString()
  p256dh: string;

  @ApiModelProperty({ type: String, isArray: true })
  @IsNotEmpty()
  topics: string[];
}
