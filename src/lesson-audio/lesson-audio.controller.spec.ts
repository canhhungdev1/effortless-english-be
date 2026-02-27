import { Test, TestingModule } from '@nestjs/testing';
import { LessonAudioController } from './lesson-audio.controller';

describe('LessonAudioController', () => {
  let controller: LessonAudioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LessonAudioController],
    }).compile();

    controller = module.get<LessonAudioController>(LessonAudioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
