import { ArrayUnique, IsArray, IsBoolean, IsEmail, IsOptional, IsString, Length, Matches, ValidateNested } from 'class-validator';
import { ApiModelPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { Membership } from './membership';
import { ResourceQuota } from './resource-quota';
import { Labels } from './labels.dto';

export class UpdateProjectDto {
  @ApiModelPropertyOptional({ type: String })
  @IsOptional()
  @IsString()
  @Matches(/^[a-zA-Z0-9\d-]+$/)
  readonly name?: string;

  @ApiModelPropertyOptional({ type: String })
  @IsOptional()
  @IsString()
  readonly description?: string;

  @ApiModelPropertyOptional({ type: String })
  @IsOptional()
  @IsString()
  readonly username?: string;

  @ApiModelPropertyOptional({ type: String })
  @IsOptional()
  @IsString()
  @IsEmail()
  readonly email?: string;

  @ApiModelPropertyOptional({ type: String, minLength: 5, maxLength: 100 })
  @IsOptional()
  @IsString()
  @Length(5, 100)
  readonly billingId?: string;

  @ApiModelPropertyOptional({ type: Labels })
  @IsOptional()
  @ValidateNested()
  @Type(() => Labels)
  readonly labels?: Labels;

  @ApiModelPropertyOptional({ type: String, isArray: true })
  @IsOptional()
  @IsString({ each: true })
  @ArrayUnique()
  readonly tags?: Set<string>;

  @ApiModelPropertyOptional({ type: ResourceQuota })
  @IsOptional()
  @ValidateNested()
  @Type(() => ResourceQuota)
  resourceQuota?: ResourceQuota;

  @ApiModelPropertyOptional({ type: Boolean })
  @IsOptional()
  @IsBoolean()
  readonly isActive?: boolean;

  @ApiModelPropertyOptional({ type: Membership, isArray: true })
  @IsOptional()
  @IsArray()
  @ArrayUnique() // @ArrayNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => Membership)
  readonly memberships?: Array<Membership>;
}
