import { Module } from '@nestjs/common';
import { LessonAudioTextService } from './lesson-audio-text.service';
import { LessonAudioTextController } from './lesson-audio-text.controller';

@Module({
  providers: [LessonAudioTextService],
  controllers: [LessonAudioTextController]
})
export class LessonAudioTextModule {}
