import { IsOptional, IsString, IsUrl, MaxLength, MinLength } from 'class-validator';
import { ApiModelPropertyOptional } from '@nestjs/swagger';

export class UpdateClusterDto {
  @ApiModelPropertyOptional({ type: String, minLength: 3, maxLength: 6 })
  @IsOptional()
  @MinLength(3)
  @MaxLength(6)
  ver?: string;

  @ApiModelPropertyOptional({ type: String, minLength: 10, maxLength: 256 })
  @IsOptional()
  @IsUrl({ require_tld: false })
  @MinLength(10)
  @MaxLength(256)
  baseUrl?: string;

  @ApiModelPropertyOptional({ type: String, minLength: 256 })
  @IsOptional()
  @IsString()
  @MinLength(256)
  token?: string;
}
