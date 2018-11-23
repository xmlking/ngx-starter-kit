import { ApiModelProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class SendTopicNotificationDto {
  @ApiModelProperty({ type: String })
  @IsNotEmpty()
  @IsString()
  topic: string;

  @ApiModelProperty({ type: String })
  @IsNotEmpty()
  @IsString()
  title: string;

  @ApiModelProperty({ type: String })
  @IsNotEmpty()
  @IsString()
  body: string;
}
