import { Transform, Type } from 'class-transformer';
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
import { OrderType, PaginationParams } from '../../core';
import { User } from '../../user';
import { Project } from '../project.entity';
import { Labels } from './labels.dto';

export class FindProjectsDto extends PaginationParams<Project> {
  @IsOptional()
  @IsString()
  readonly username?: string;

  @IsOptional()
  readonly createdBy?: User;

  @IsOptional()
  @IsString()
  readonly clusterName?: string;

  @IsOptional()
  @ArrayUnique()
  @IsString({ each: true })
  @Transform(value => (value ? value.split(',') : []))
  readonly groups?: string[];

  @IsOptional()
  @IsAscii()
  @Length(5, 100)
  @Matches(/^[a-z\d-]+$/)
  readonly namespace?: string;

  @IsOptional()
  @IsAscii()
  @Length(5, 100)
  @Matches(/^[a-z\d-]+$/)
  readonly serviceAccountName?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Labels)
  readonly labels?: Labels;

  @Transform((val: string) => val === 'true')
  @IsOptional()
  @IsBoolean()
  readonly isActive?: boolean = true;

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
