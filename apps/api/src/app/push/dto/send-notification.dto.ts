import { ApiModelProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class SendNotificationDto {
  @ApiModelProperty({ type: String })
  @IsNotEmpty()
  @IsString()
  id: string;

  @ApiModelProperty({ type: String })
  @IsNotEmpty()
  @IsString()
  title: string;

  @ApiModelProperty({ type: String })
  @IsNotEmpty()
  @IsString()
  body: string;
}
