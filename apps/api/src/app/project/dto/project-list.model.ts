import { IPagination } from '../../core';
import { Project } from '../project.entity';

export class ProjectList implements IPagination<Project> {
  readonly items: Project[];
  readonly total: number;
}
