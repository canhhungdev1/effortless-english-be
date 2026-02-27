import { Test, TestingModule } from '@nestjs/testing';
import { LessonAudioTextController } from './lesson-audio-text.controller';

describe('LessonAudioTextController', () => {
  let controller: LessonAudioTextController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LessonAudioTextController],
    }).compile();

    controller = module.get<LessonAudioTextController>(LessonAudioTextController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
