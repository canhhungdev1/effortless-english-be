import { Module } from '@nestjs/common';
import { LessonService } from './lesson.service';
import { LessonController } from './lesson.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lesson } from './lesson.entity';
import { AudioSubtitle } from 'src/modules/audio-subtitles/audio-subtitle.entity';
import { Audio } from 'src/modules/audios/audio.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Lesson, Audio, AudioSubtitle]),
  ],
  providers: [LessonService],
  controllers: [LessonController]
})
export class LessonModule {}
