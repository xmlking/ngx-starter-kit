import {
  ArrayUnique,
  IsAscii,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
  Matches,
  Validate,
  ValidateNested,
} from 'class-validator';
import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';
import { Labels } from './labels.dto';
import { Type } from 'class-transformer';
import { ResourceQuota } from './resource-quota';
import { IsNamespaceUnique } from '../validators';

export class CreateProjectDto {
  @ApiModelProperty({ type: String })
  @IsString()
  @Matches(/^[a-zA-Z0-9\d-]+$/)
  readonly name: string;

  @ApiModelPropertyOptional({ type: String })
  @IsOptional()
  @IsString()
  readonly description?: string;

  @ApiModelProperty({ type: String })
  @IsString()
  @IsNotEmpty()
  readonly clusterName: string;

  @ApiModelProperty({ type: String, minLength: 5, maxLength: 100 })
  @IsAscii()
  @IsNotEmpty()
  @Length(5, 100)
  @Matches(/^[a-z\d-]+$/)
  @IsNamespaceUnique()
  readonly namespace: string;

  @ApiModelProperty({ type: String, minLength: 5, maxLength: 100 })
  @IsAscii()
  @IsNotEmpty()
  @Length(5, 100)
  @Matches(/^[a-z\d-]+$/)
  readonly serviceAccountName: string;

  @ApiModelPropertyOptional({ type: String })
  @IsOptional()
  @IsString()
  username?: string;

  @ApiModelPropertyOptional({ type: String })
  @IsOptional()
  @IsString()
  @IsEmail()
  email?: string;

  @ApiModelProperty({ type: String, minLength: 5, maxLength: 100 })
  @IsNotEmpty()
  @IsString()
  @Length(5, 100)
  readonly billingId: string;

  @ApiModelProperty({ type: Labels })
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => Labels)
  readonly labels: Labels;

  @ApiModelPropertyOptional({ type: String, isArray: true })
  @IsOptional()
  @IsString({ each: true })
  @ArrayUnique()
  readonly tags?: Set<string>;

  @ApiModelPropertyOptional({ type: ResourceQuota })
  @IsOptional()
  @ValidateNested()
  @Type(() => ResourceQuota)
  resourceQuota: ResourceQuota;
}
