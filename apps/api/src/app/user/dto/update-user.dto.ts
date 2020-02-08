import { IsEmail, IsNotEmpty, IsString, Length, Validate } from 'class-validator';
import { IsEmailUnique } from '../validator/is-email-unique.validator';

export class UpdateUserDto {
  @IsString()
  @IsNotEmpty()
  readonly firstName: string;

  @IsString()
  @IsNotEmpty()
  readonly lastName: string;

  @IsEmail()
  @IsNotEmpty()
  @Length(10, 100)
  @Validate(IsEmailUnique)
  readonly email: string;
}
