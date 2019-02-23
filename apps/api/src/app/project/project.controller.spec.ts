import { Test, TestingModule } from '@nestjs/testing';
import { ProjectController } from './project.controller';

describe('Project Controller', () => {
  let module: TestingModule;
  
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [ProjectController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: ProjectController = module.get<ProjectController>(ProjectController);
    expect(controller).toBeDefined();
  });
});
