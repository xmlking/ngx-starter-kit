import { Test, TestingModule } from '@nestjs/testing';
import { ProfileController } from './profile.controller';

describe('Profile Controller', () => {
  let module: TestingModule;
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [ProfileController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: ProfileController = module.get<ProfileController>(ProfileController);
    expect(controller).toBeDefined();
  });
});
