import { IsAscii, IsEmail, IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';
import { Validate } from 'class-validator';
import { IsEmailUnique } from '../validator/is-email-unique.validator';

export class CreateUserDto {
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

  @ApiModelProperty({ type: String, minLength: 8, maxLength: 20 })
  @IsAscii()
  @MinLength(8)
  @MaxLength(20)
  @IsString()
  @IsNotEmpty()
  readonly username: string;
}
