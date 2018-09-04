import { Test, TestingModule } from '@nestjs/testing';
import { EmailController } from './email.controller';
import { EmailService } from '../../email';

describe('Email Controller', () => {
  let module: TestingModule;
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [EmailController],
      providers: [
        {
          provide: EmailService,
          useValue: {}, // TODO: Mock
        },
      ],
    }).compile();
  });
  it('should be defined', () => {
    const controller: EmailController = module.get<EmailController>(EmailController);
    expect(controller).toBeDefined();
  });
});
