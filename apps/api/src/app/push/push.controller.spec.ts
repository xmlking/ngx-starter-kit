import { Test, TestingModule } from '@nestjs/testing';
import { PushController } from './push.controller';
import { PushService } from './push.service';

describe('Push Controller', () => {
  let module: TestingModule;

  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [PushController],
      providers: [
        {
          provide: PushService,
          useValue: {}, // TODO: Mock
        },
      ],
    }).compile();
  });
  it('should be defined', () => {
    const controller: PushController = module.get<PushController>(PushController);
    expect(controller).toBeDefined();
  });
});
