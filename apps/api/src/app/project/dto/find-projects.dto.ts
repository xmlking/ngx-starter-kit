import { OrderType, PaginationParams } from '../../core';
import { Project } from '../project.entity';
import {
  ArrayUnique,
  IsAscii,
  IsBoolean,
  IsOptional,
  IsString,
  Length,
  Matches,
  ValidateNested,
} from 'class-validator';
import { ApiModelPropertyOptional } from '@nestjs/swagger';
import { Labels } from './labels.dto';
import { Transform, Type } from 'class-transformer';
import { User } from '../../user';

export class FindProjectsDto extends PaginationParams<Project> {
  @ApiModelPropertyOptional({ type: String })
  @IsOptional()
  @IsString()
  readonly username?: string;

  @ApiModelPropertyOptional({ type: User })
  @IsOptional()
  readonly createdBy?: User;

  @ApiModelPropertyOptional({ type: String })
  @IsOptional()
  @IsString()
  readonly clusterName?: string;

  @ApiModelPropertyOptional({ type: String, isArray: true })
  @IsOptional()
  @ArrayUnique()
  @IsString({ each: true })
  @Transform(value => (value ? value.split(',') : []))
  readonly groups?: string[];

  @ApiModelPropertyOptional({ type: String })
  @IsOptional()
  @IsAscii()
  @Length(5, 100)
  @Matches(/^[a-z\d-]+$/)
  readonly namespace?: string;

  @ApiModelPropertyOptional({ type: String, minLength: 5, maxLength: 100 })
  @IsOptional()
  @IsAscii()
  @Length(5, 100)
  @Matches(/^[a-z\d-]+$/)
  readonly serviceAccountName?: string;

  @ApiModelPropertyOptional({ type: Labels })
  @IsOptional()
  @ValidateNested()
  @Type(() => Labels)
  readonly labels?: Labels;

  @ApiModelPropertyOptional({ type: Boolean, default: true })
  @Transform((val: string) => val === 'true')
  @IsOptional()
  @IsBoolean()
  readonly isActive = true;

  @ApiModelPropertyOptional({ type: String, enum: ['ASC', 'DESC'] })
  @IsOptional()
  @Transform((val: string) => ({ createdAt: val === OrderType.ASC ? OrderType.ASC : OrderType.DESC }))
  readonly order = {
    createdAt: OrderType.DESC,
  };

  constructor(values: Partial<FindProjectsDto>) {
    super();
    Object.assign(this, values);
  }
}
