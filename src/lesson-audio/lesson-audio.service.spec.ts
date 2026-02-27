import { Test, TestingModule } from '@nestjs/testing';
import { LessonAudioService } from './lesson-audio.service';

describe('LessonAudioService', () => {
  let service: LessonAudioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LessonAudioService],
    }).compile();

    service = module.get<LessonAudioService>(LessonAudioService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
