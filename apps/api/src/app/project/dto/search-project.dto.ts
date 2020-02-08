import { Type } from 'class-transformer';
import { IsArray, IsAscii, IsOptional, IsString, Length, Matches, ValidateNested } from 'class-validator';
import { Labels } from './labels.dto';

export class SearchProjectDto {
  @IsArray()
  @IsOptional()
  readonly groups?: string[];

  @IsString()
  @IsOptional()
  readonly username?: string;

  @IsAscii()
  @IsOptional()
  @Length(5, 100)
  @Matches(/^[a-z\d-]+$/)
  readonly namespace?: string;

  @IsAscii()
  @IsOptional()
  @Length(5, 100)
  @Matches(/^[a-z\d-]+$/)
  readonly serviceAccountName: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Labels)
  readonly labels?: Labels;
}
