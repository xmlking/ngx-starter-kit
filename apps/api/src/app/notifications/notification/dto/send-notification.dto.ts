import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class SendNotificationDto {
  @ApiModelProperty({ type: Number })
  @IsNotEmpty()
  id: number;

  @ApiModelPropertyOptional({ type: String })
  @IsOptional()
  @IsString()
  target?: string;
}
