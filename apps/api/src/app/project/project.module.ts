import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { KubernetesController } from './kubernetes/kubernetes.controller';
import { KubernetesService } from './kubernetes/kubernetes.service';
import { ClusterController } from './cluster/cluster.controller';
import { ClusterService } from './cluster/cluster.service';
import { ProjectController } from './project.controller';
import { ProjectService } from './project.service';
import { Cluster } from './cluster/cluster.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cluster])],
  controllers: [KubernetesController, ClusterController, ProjectController],
  providers: [KubernetesService, ClusterService, ProjectService]
})
export class ProjectModule {}
