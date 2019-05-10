import { Test, TestingModule } from '@nestjs/testing';
import { ClusterController } from './cluster.controller';
import { CacheModule } from '../../cache';
import { ClusterService } from './cluster.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Cluster } from './cluster.entity';
import { Project } from '../project.entity';

describe('Cluster Controller', () => {
  let module: TestingModule;
  const mockRepository = {
    find() {
      return {};
    },
  };

  beforeAll(async () => {
    module = await Test.createTestingModule({
      imports: [CacheModule],
      controllers: [ClusterController],
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
      ]
    }).compile();
  });
  it('should be defined', () => {
    const controller: ClusterController = module.get<ClusterController>(ClusterController);
    expect(controller).toBeDefined();
  });
});
