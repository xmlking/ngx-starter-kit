import { Gender } from '@ngx-starter-kit/models';
import { IsEnum, IsOptional, IsString, Length } from 'class-validator';

export class CreateProfileDto {
  @IsOptional()
  @IsEnum(Gender)
  gender?: Gender = Gender.UNKNOW;

  @IsOptional()
  @IsString()
  @Length(10, 20)
  mobilePhone?: string;
}
