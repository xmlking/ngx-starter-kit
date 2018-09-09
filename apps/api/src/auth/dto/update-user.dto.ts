import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

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
  readonly email: string;
}
