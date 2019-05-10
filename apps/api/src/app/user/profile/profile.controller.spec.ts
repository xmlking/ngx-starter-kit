import { Test, TestingModule } from '@nestjs/testing';
import { ProfileController } from './profile.controller';
import { ProfileService } from './profile.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Profile } from './profile.entity';
import { User } from '../user.entity';
import { Image } from './image.entity';

describe('Profile Controller', () => {
  let module: TestingModule;
  const mockRepository = {
    find() {
      return {};
    },
  };

  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [ProfileController],
      providers: [
        ProfileService,
        {
          provide: getRepositoryToken(Profile),
          useValue: mockRepository,
        },
        {
          provide: getRepositoryToken(User),
          useValue: mockRepository,
        },
        {
          provide: getRepositoryToken(Image),
          useValue: mockRepository,
        },
      ],
    }).compile();
  });
  it('should be defined', () => {
    const controller: ProfileController = module.get<ProfileController>(ProfileController);
    expect(controller).toBeDefined();
  });
});
