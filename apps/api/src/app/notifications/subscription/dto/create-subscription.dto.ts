import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';
import { ArrayUnique, IsNotEmpty, IsOptional, IsString, IsUrl } from 'class-validator';

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

  @ApiModelPropertyOptional({ type: String, isArray: true })
  @IsOptional()
  @ArrayUnique()
  // @IsEnum(TopicsEnum, { each: true })
  @IsString({ each: true })
  topics: string[];
}
