import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class SendNotificationDto {
  @IsNotEmpty()
  id: string;

  @IsOptional()
  @IsString()
  target?: string;
}
