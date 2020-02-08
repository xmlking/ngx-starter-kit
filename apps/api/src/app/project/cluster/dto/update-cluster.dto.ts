import { IsOptional, IsString, IsUrl, MaxLength, MinLength } from 'class-validator';

export class UpdateClusterDto {
  @IsOptional()
  @MinLength(3)
  @MaxLength(6)
  ver?: string;

  @IsOptional()
  @IsUrl({ require_tld: false })
  @MinLength(10)
  @MaxLength(256)
  baseUrl?: string;

  @IsOptional()
  @IsString()
  @MinLength(256)
  token?: string;
}
