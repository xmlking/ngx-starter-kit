import { Test, TestingModule } from '@nestjs/testing';
import { NotificationsController } from './notifications.controller';

describe('Notifications Controller', () => {
  let module: TestingModule;
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [NotificationsController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: NotificationsController = module.get<NotificationsController>(NotificationsController);
    expect(controller).toBeDefined();
  });
});
