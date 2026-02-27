import { Module } from '@nestjs/common';
import { LessonAudioService } from './lesson-audio.service';
import { LessonAudioController } from './lesson-audio.controller';

@Module({
  providers: [LessonAudioService],
  controllers: [LessonAudioController]
})
export class LessonAudioModule {}
