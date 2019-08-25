import { Test, TestingModule } from '@nestjs/testing';
import { ClusterService } from './cluster.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { CacheModule } from '../../cache';

import { Cluster } from './cluster.entity';
import { Project } from '../project.entity';

describe('ClusterService', () => {
  let service: ClusterService;

  const mockRepository = {
    find() {
      return {};
    },
  };

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [CacheModule],
      providers: [
        ClusterService,
        {
          provide: getRepositoryToken(Cluster),
          useValue: mockRepository,
        },
        {
          provide: getRepositoryToken(Project),
          useValue: mockRepository,
        },
      ],
    }).compile();
    service = module.get<ClusterService>(ClusterService);
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
