import { Module } from '@nestjs/common';
import { LessonAudioService } from './audio.service';
import { LessonAudioController } from './audio.controller';

@Module({
  providers: [LessonAudioService],
  controllers: [LessonAudioController]
})
export class LessonAudioModule {}
