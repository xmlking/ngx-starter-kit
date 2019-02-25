import { IsArray, IsAscii, IsOptional, IsString, Length, Matches, ValidateNested } from 'class-validator';
import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';
import { Labels } from './labels.dto';
import { Type } from 'class-transformer';

export class SearchProjectDto {
  @ApiModelProperty({ type: [String] })
  @IsArray()
  @IsOptional()
  readonly groups?: string[];

  @ApiModelProperty({ type: String })
  @IsString()
  @IsOptional()
  readonly username?: string;

  @ApiModelPropertyOptional({ type: String })
  @IsAscii()
  @IsOptional()
  @Length(5, 100)
  @Matches(/^[a-z\d-]+$/)
  readonly namespace?: string;

  @ApiModelPropertyOptional({ type: String, minLength: 5, maxLength: 100 })
  @IsAscii()
  @IsOptional()
  @Length(5, 100)
  @Matches(/^[a-z\d-]+$/)
  readonly serviceAccountName: string;

  @ApiModelPropertyOptional({ type: Labels })
  @IsOptional()
  @ValidateNested()
  @Type(() => Labels)
  readonly labels?: Labels;
}
