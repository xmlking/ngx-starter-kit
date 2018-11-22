import { Test, TestingModule } from '@nestjs/testing';
import { NotificationsService } from './notifications.service';

describe('NotificationsService', () => {
  let service: NotificationsService;
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: NotificationsService,
          useValue: {}, // TODO: Mock
        },
      ],
    }).compile();
    service = module.get<NotificationsService>(NotificationsService);
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
