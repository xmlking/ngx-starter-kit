import { Test, TestingModule } from '@nestjs/testing';
import { NotificationService } from './notification.service';

describe('NotificationService', () => {
  let service: NotificationService;
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: NotificationService,
          useValue: {}, // TODO: Mock
        },
      ],
    }).compile();
    service = module.get<NotificationService>(NotificationService);
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
