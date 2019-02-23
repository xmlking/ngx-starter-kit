import { Test, TestingModule } from '@nestjs/testing';
import { KubernetesService } from './kubernetes.service';

describe('KubernetesService', () => {
  let service: KubernetesService;
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KubernetesService],
    }).compile();
    service = module.get<KubernetesService>(KubernetesService);
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
