import { IsEmail, IsNotEmpty, IsString, Validate } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';
import { IsEmailUnique } from '../validator/is-email-unique.validator';

export class UpdateUserDto {
  @ApiModelProperty({ type: String })
  @IsString()
  @IsNotEmpty()
  readonly firstName: string;

  @ApiModelProperty({ type: String })
  @IsString()
  @IsNotEmpty()
  readonly lastName: string;

  @ApiModelProperty({ type: String, minLength: 10, maxLength: 100 })
  @IsEmail()
  @IsNotEmpty()
  @Validate(IsEmailUnique)
  readonly email: string;
}
