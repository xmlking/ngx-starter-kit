import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class SendNotificationDto {
  @ApiModelProperty({ type: String })
  @IsNotEmpty()
  id: string;

  @ApiModelPropertyOptional({ type: String })
  @IsOptional()
  @IsString()
  target?: string;
}
