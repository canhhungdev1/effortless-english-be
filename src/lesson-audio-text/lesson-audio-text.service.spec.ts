import { Test, TestingModule } from '@nestjs/testing';
import { LessonAudioTextService } from './lesson-audio-text.service';

describe('LessonAudioTextService', () => {
  let service: LessonAudioTextService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LessonAudioTextService],
    }).compile();

    service = module.get<LessonAudioTextService>(LessonAudioTextService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
