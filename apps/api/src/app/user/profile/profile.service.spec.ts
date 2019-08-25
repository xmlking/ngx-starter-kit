import { Test, TestingModule } from '@nestjs/testing';
import { ProfileService } from './profile.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Profile } from './profile.entity';
import { User } from '../user.entity';
import { Image } from './image.entity';

describe('ProfileService', () => {
  let service: ProfileService;
  const mockRepository = {
    find() {
      return {};
    },
  };

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
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
    service = module.get<ProfileService>(ProfileService);
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
