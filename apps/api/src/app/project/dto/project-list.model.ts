import { IPagination } from '../../core';
import { Project } from '../project.entity';
import { ApiModelProperty } from '@nestjs/swagger';

export class ProjectList implements IPagination<Project> {
  @ApiModelProperty({ type: Project, isArray: true })
  readonly items: Project[];
  @ApiModelProperty({ type: Number, readOnly: true })
  readonly total: number;
}
