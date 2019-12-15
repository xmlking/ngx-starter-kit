import { Type } from 'class-transformer';
import {
  ArrayUnique,
  IsAscii,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
  Matches,
  ValidateNested,
} from 'class-validator';
import { IsNamespaceUnique } from '../validators';
import { Labels } from './labels.dto';
import { ResourceQuota } from './resource-quota';

export class CreateProjectDto {
  @IsString()
  @Matches(/^[a-zA-Z0-9\d-]+$/)
  readonly name: string;

  @IsOptional()
  @IsString()
  readonly description?: string;

  @IsString()
  @IsNotEmpty()
  readonly clusterName: string;

  @IsAscii()
  @IsNotEmpty()
  @Length(5, 100)
  @Matches(/^[a-z\d-]+$/)
  @IsNamespaceUnique()
  readonly namespace: string;

  @IsAscii()
  @IsNotEmpty()
  @Length(5, 100)
  @Matches(/^[a-z\d-]+$/)
  readonly serviceAccountName: string;

  @IsOptional()
  @IsString()
  username?: string;

  @IsOptional()
  @IsString()
  @IsEmail()
  email?: string;

  @IsNotEmpty()
  @IsString()
  @Length(5, 100)
  readonly billingId: string;

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => Labels)
  readonly labels: Labels;

  @IsOptional()
  @IsString({ each: true })
  @ArrayUnique()
  readonly tags?: Set<string>;

  @IsOptional()
  @ValidateNested()
  @Type(() => ResourceQuota)
  resourceQuota: ResourceQuota;
}
