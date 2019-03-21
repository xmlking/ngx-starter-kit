import { OrderType, PaginationParams } from '../../core';
import { Project } from '../project.entity';
import { ApiModelPropertyOptional } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';
import { Transform } from 'class-transformer';

export class FindOwnProjectsDto extends PaginationParams<Project> {
  @ApiModelPropertyOptional({ type: String, enum: ['ASC', 'DESC'] })
  @IsOptional()
  @Transform((val: string) => ({ createdAt: val === OrderType.ASC ? OrderType.ASC : OrderType.DESC }))
  readonly order = {
    createdAt: OrderType.DESC,
  };
}
