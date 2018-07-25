import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';

describe('Auth Controller', () => {
  let module: TestingModule;
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [AuthController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: AuthController = module.get<AuthController>(AuthController);
    expect(controller).toBeDefined();
  });
});
