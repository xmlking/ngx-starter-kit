import { Test, TestingModule } from '@nestjs/testing';
import { KubernetesController } from './kubernetes.controller';

describe('Kubernetes Controller', () => {
  let module: TestingModule;
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [KubernetesController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: KubernetesController = module.get<KubernetesController>(KubernetesController);
    expect(controller).toBeDefined();
  });
});
