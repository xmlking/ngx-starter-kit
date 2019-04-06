import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { KubernetesController } from './kubernetes/kubernetes.controller';
import { KubernetesService } from './kubernetes/kubernetes.service';
import { ClusterController } from './cluster/cluster.controller';
import { ClusterService } from './cluster/cluster.service';
import { ProjectController } from './project.controller';
import { ProjectService } from './project.service';
import { Cluster } from './cluster/cluster.entity';
import { Project } from './project.entity';
import { KubernetesHealthIndicator } from './kubernetes/kubernetes.health';
import { SharedModule } from '../shared';
import { Constraints } from './validators';


@Module({
  imports: [SharedModule, TypeOrmModule.forFeature([Cluster, Project])],
  controllers: [KubernetesController, ClusterController, ProjectController],
  providers: [KubernetesService, ClusterService, ProjectService, KubernetesHealthIndicator, ...Constraints],
  exports: [KubernetesHealthIndicator],
})
export class ProjectModule {}
