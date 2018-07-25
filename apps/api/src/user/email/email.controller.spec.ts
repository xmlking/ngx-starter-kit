import { Test, TestingModule } from '@nestjs/testing';
import { EmailController } from './email.controller';

describe('Email Controller', () => {
  let module: TestingModule;
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [EmailController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: EmailController = module.get<EmailController>(EmailController);
    expect(controller).toBeDefined();
  });
});
