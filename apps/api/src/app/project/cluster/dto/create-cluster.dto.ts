import { IsAscii, IsNotEmpty, IsString, IsUrl, MaxLength, MinLength } from 'class-validator';

export class CreateClusterDto {
  @IsNotEmpty()
  @IsAscii()
  @MinLength(3)
  @MaxLength(15)
  name: string;

  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(6)
  ver: string;

  @IsNotEmpty()
  @IsUrl({ require_tld: false })
  @MinLength(10)
  @MaxLength(256)
  baseUrl: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(256)
  token: string;
}
