import { Type } from 'class-transformer';
import {
  ArrayUnique,
  IsArray,
  IsBoolean,
  IsEmail,
  IsOptional,
  IsString,
  Length,
  Matches,
  ValidateNested,
} from 'class-validator';
import { Labels } from './labels.dto';
import { Membership } from './membership';
import { ResourceQuota } from './resource-quota';

export class UpdateProjectDto {
  @IsOptional()
  @IsString()
  @Matches(/^[a-zA-Z0-9\d-]+$/)
  readonly name?: string;

  @IsOptional()
  @IsString()
  readonly description?: string;

  @IsOptional()
  @IsString()
  readonly username?: string;

  @IsOptional()
  @IsString()
  @IsEmail()
  readonly email?: string;

  @IsOptional()
  @IsString()
  @Length(5, 100)
  readonly billingId?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Labels)
  readonly labels?: Labels;

  @IsOptional()
  @IsString({ each: true })
  @ArrayUnique()
  readonly tags?: Set<string>;

  @IsOptional()
  @ValidateNested()
  @Type(() => ResourceQuota)
  resourceQuota?: ResourceQuota;

  @IsOptional()
  @IsBoolean()
  readonly isActive?: boolean;

  @IsOptional()
  @IsArray()
  @ArrayUnique() // @ArrayNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => Membership)
  readonly memberships?: Array<Membership>;
}
