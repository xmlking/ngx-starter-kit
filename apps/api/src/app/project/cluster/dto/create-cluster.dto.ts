import { IsAscii, IsNotEmpty, IsString, IsUrl, MaxLength, MinLength } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class CreateClusterDto {
  @ApiModelProperty({ type: String, minLength: 3, maxLength: 15 })
  @IsNotEmpty()
  @IsAscii()
  @MinLength(3)
  @MaxLength(15)
  name: string;

  @ApiModelProperty({ type: String, minLength: 3, maxLength: 6 })
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(6)
  ver: string;

  @ApiModelProperty({ type: String, minLength: 10, maxLength: 256 })
  @IsNotEmpty()
  @IsUrl({ require_tld: false })
  @MinLength(10)
  @MaxLength(256)
  baseUrl: string;

  @ApiModelProperty({ type: String, minLength: 256 })
  @IsNotEmpty()
  @IsString()
  @MinLength(256)
  token: string;
}
