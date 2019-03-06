import { Test, TestingModule } from '@nestjs/testing';
import { ClusterController } from './cluster.controller';

describe('Cluster Controller', () => {
  let module: TestingModule;
  
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [ClusterController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: ClusterController = module.get<ClusterController>(ClusterController);
    expect(controller).toBeDefined();
  });
});
