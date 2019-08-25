import { Test, TestingModule } from '@nestjs/testing';
import { KubernetesService } from './kubernetes.service';
import { CacheModule } from '../../cache';
import { ConfigModule } from '../../config';
import { ClusterService } from '../cluster/cluster.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Cluster } from '../cluster/cluster.entity';

describe('KubernetesService', () => {
  let service: KubernetesService;
  const mockRepository = {
    find() {
      return {};
    },
  };

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [CacheModule, ConfigModule],
      providers: [
        KubernetesService,
        ClusterService,
        {
          provide: getRepositoryToken(Cluster),
          useValue: mockRepository,
        },
      ],
    }).compile();
    service = module.get<KubernetesService>(KubernetesService);
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
