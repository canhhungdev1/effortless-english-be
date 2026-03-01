import { Module } from '@nestjs/common';
import { LessonsService } from './lessons.service';
import { LessonsController } from './lessons.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lesson } from './lesson.entity';
import { AudioSubtitle } from 'src/audio-subtitles/audio-subtitle.entity';
import { Audio } from 'src/audios/audio.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Lesson, Audio, AudioSubtitle]),
  ],
  providers: [LessonsService],
  controllers: [LessonsController]
})
export class LessonsModule {}
