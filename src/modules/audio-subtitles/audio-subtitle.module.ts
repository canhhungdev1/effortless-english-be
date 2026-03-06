import { Module } from '@nestjs/common';
import { LessonAudioTextService } from './audio-subtitle.service';
import { LessonAudioTextController } from './audio-subtitle.controller';

@Module({
  providers: [LessonAudioTextService],
  controllers: [LessonAudioTextController]
})
export class LessonAudioTextModule {}
