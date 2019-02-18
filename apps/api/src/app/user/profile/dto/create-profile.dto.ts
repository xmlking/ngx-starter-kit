import { IsEnum, IsOptional, IsString, MaxLength, MinLength } from 'class-validator';
import { ApiModelPropertyOptional } from '@nestjs/swagger';
import { Gender } from '@ngx-starter-kit/models';

export class CreateProfileDto {
  @ApiModelPropertyOptional({ type: String, enum: Gender, default: Gender.UNKNOW })
  @IsOptional()
  @IsEnum(Gender)
  gender?: Gender;

  @ApiModelPropertyOptional({ type: String, minLength: 10, maxLength: 20 })
  @IsOptional()
  @IsString()
  @MinLength(10)
  @MaxLength(20)
  mobilePhone?: string;
}
