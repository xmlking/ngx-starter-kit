import { Test, TestingModule } from '@nestjs/testing';
import { ChatController } from './chat.controller';

describe('Chat Controller', () => {
  let module: TestingModule;
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [ChatController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: ChatController = module.get<ChatController>(ChatController);
    expect(controller).toBeDefined();
  });
});
