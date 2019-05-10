import { Test, TestingModule } from '@nestjs/testing';
import { SubscriptionService } from './subscription.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Subscription } from './subscription.entity';

describe('SubscriptionService', () => {
  let service: SubscriptionService;
  const MockRepository = jest.fn().mockImplementation(() => ({
    find: jest.fn(() => Promise.resolve([])),
    findOne: jest.fn(id => (id > 0 ? Promise.resolve({ id }) : Promise.resolve())),
    save: jest.fn(dto => Promise.resolve(dto)),
    delete: jest.fn(id =>
      id > 0 ? Promise.resolve({ raw: [], affected: 1 }) : Promise.resolve({ raw: [], affected: 0 }),
    ),
  }));

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SubscriptionService,
        {
          provide: getRepositoryToken(Subscription),
          useValue: new MockRepository(),
        },
      ],
    }).compile();
    service = module.get<SubscriptionService>(SubscriptionService);
  });

  afterEach(() => {
    MockRepository.mockClear();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
