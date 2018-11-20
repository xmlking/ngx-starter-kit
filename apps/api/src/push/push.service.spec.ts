import { Test, TestingModule } from '@nestjs/testing';
import { PushService } from './push.service';

describe('PushService', () => {
  let service: PushService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PushService],
    }).compile();
    service = module.get<PushService>(PushService);
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
