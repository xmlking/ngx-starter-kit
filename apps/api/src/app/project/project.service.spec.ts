import { Test, TestingModule } from '@nestjs/testing';
import { ProjectService } from './project.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Project } from './project.entity';
import { Cluster } from './cluster/cluster.entity';
import { ClusterService } from './cluster/cluster.service';
import { KubernetesService } from './kubernetes/kubernetes.service';
import { CacheModule } from '../cache';
import { ConfigModule } from '../config';


describe('ProjectService', () => {
  let service: ProjectService;
  const mockRepository = {
    find() {
      return {};
    },
  };

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [CacheModule, ConfigModule],
      providers: [
        ProjectService,
        ClusterService,
        KubernetesService,
        {
          provide: getRepositoryToken(Project),
          useValue: mockRepository,
        },
        {
          provide: getRepositoryToken(Cluster),
          useValue: mockRepository,
        },
      ],
    }).compile();
    service = module.get<ProjectService>(ProjectService);
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
