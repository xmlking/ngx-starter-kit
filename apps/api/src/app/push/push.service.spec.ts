import { Test, TestingModule } from '@nestjs/testing';
import { PushService } from './push.service';

describe('PushService', () => {
  let service: PushService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: PushService,
          useValue: {}, // TODO: Mock
        },
      ],
    }).compile();
    service = module.get<PushService>(PushService);
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
