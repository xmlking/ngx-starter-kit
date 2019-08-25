import { Test, TestingModule } from '@nestjs/testing';
import { ProjectController } from './project.controller';
import { ProjectService } from './project.service';
import { KubernetesService } from './kubernetes/kubernetes.service';
import { ClusterService } from './cluster/cluster.service';
import { Project } from './project.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Cluster } from './cluster/cluster.entity';
import { CacheModule } from '../cache';
import { ConfigModule } from '../config';

describe('Project Controller', () => {
  let module: TestingModule;
  const mockRepository = {
    find() {
      return {};
    },
  };

  beforeAll(async () => {
    module = await Test.createTestingModule({
      imports: [CacheModule, ConfigModule],
      controllers: [ProjectController],
      providers: [
        {
          provide: getRepositoryToken(Project),
          useValue: mockRepository,
        },
        {
          provide: getRepositoryToken(Cluster),
          useValue: mockRepository,
        },
        ProjectService,
        ClusterService,
        KubernetesService,
      ],
    }).compile();
  });
  it('should be defined', () => {
    const controller: ProjectController = module.get<ProjectController>(ProjectController);
    expect(controller).toBeDefined();
  });
});
