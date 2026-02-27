import { Module } from '@nestjs/common';
import { LessonsService } from './lessons.service';
import { LessonsController } from './lessons.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lesson } from './lesson.entity';
import { LessonAudio } from 'src/lesson-audio/lesson-audio.entity';
import { LessonAudioText } from 'src/lesson-audio-text/lesson-audio-text.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Lesson, LessonAudio, LessonAudioText]),
  ],
  providers: [LessonsService],
  controllers: [LessonsController]
})
export class LessonsModule {}
