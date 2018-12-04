import { Test, TestingModule } from '@nestjs/testing';
import { SubscriptionService } from './subscription.service';

describe('SubscriptionService', () => {
  let service: SubscriptionService;
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SubscriptionService],
    }).compile();
    service = module.get<SubscriptionService>(SubscriptionService);
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
