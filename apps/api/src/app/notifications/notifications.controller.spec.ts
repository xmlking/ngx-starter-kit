import { Test, TestingModule } from '@nestjs/testing';
import { NotificationsController } from './notifications.controller';
import { NotificationsService } from './notifications.service';

describe('Notifications Controller', () => {
  let module: TestingModule;
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [NotificationsController],
      providers: [
        {
          provide: NotificationsService,
          useValue: {}, // TODO: Mock
        },
      ],
    }).compile();
  });
  it('should be defined', () => {
    const controller: NotificationsController = module.get<NotificationsController>(NotificationsController);
    expect(controller).toBeDefined();
  });
});
