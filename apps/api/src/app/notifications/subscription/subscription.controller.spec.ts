import { Test, TestingModule } from '@nestjs/testing';
import { SubscriptionController } from './subscription.controller';
import { SubscriptionService } from './subscription.service';

describe('Subscription Controller', () => {
  let module: TestingModule;
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [SubscriptionController],
      providers: [
        {
          provide: SubscriptionService,
          useValue: {}, // TODO: Mock
        },
      ],
    }).compile();
  });
  it('should be defined', () => {
    const controller: SubscriptionController = module.get<SubscriptionController>(SubscriptionController);
    expect(controller).toBeDefined();
  });
});
