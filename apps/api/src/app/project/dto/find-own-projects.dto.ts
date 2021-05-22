import { Transform } from 'class-transformer';
import { IsOptional } from 'class-validator';
import { OrderType, PaginationParams } from '../../core';
import { Project } from '../project.entity';

export class FindOwnProjectsDto extends PaginationParams<Project> {
  @IsOptional()
  @Transform(({ value }) => ({ createdAt: value === OrderType.ASC ? OrderType.ASC : OrderType.DESC }))
  readonly order = {
    createdAt: OrderType.DESC,
  };
}
