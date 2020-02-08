import { ArrayUnique, IsNotEmpty, IsOptional, IsString, IsUrl } from 'class-validator';

export class CreateSubscriptionDto {
  @IsNotEmpty()
  @IsUrl({}, { message: 'endpoint must be a valid url.' })
  endpoint: string;

  @IsNotEmpty()
  @IsString()
  auth: string;

  @IsNotEmpty()
  @IsString()
  p256dh: string;

  @IsOptional()
  @ArrayUnique()
  // @IsEnum(TopicsEnum, { each: true })
  @IsString({ each: true })
  topics: string[];
}
