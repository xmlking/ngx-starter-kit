import { Test, TestingModule } from '@nestjs/testing';
import { KubernetesController } from './kubernetes.controller';
import { KubernetesService } from './kubernetes.service';
import { CacheModule } from '../../cache';
import { ConfigModule } from '../../config';
import { ClusterService } from '../cluster/cluster.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Cluster } from '../cluster/cluster.entity';

describe('Kubernetes Controller', () => {
  let module: TestingModule;
  const mockRepository = {
    find() {
      return {};
    },
  };

  beforeAll(async () => {
    module = await Test.createTestingModule({
      imports: [CacheModule, ConfigModule],
      controllers: [KubernetesController],
      providers: [
        KubernetesService,
        ClusterService,
        {
          provide: getRepositoryToken(Cluster),
          useValue: mockRepository,
        },
      ]
    }).compile();
  });
  it('should be defined', () => {
    const controller: KubernetesController = module.get<KubernetesController>(KubernetesController);
    expect(controller).toBeDefined();
  });
});
