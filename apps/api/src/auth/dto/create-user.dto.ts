import { IsAscii, IsEmail, IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

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
  readonly email: string;

  @ApiModelProperty({ type: String, minLength: 8, maxLength: 20 })
  @IsAscii()
  @IsNotEmpty()
  @MinLength(8)
  @MaxLength(20)
  @IsString()
  @IsNotEmpty()
  readonly userId: string;
}
