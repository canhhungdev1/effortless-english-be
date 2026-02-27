import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Lesson } from './lesson.entity';
import { LessonAudio } from 'src/lesson-audio/lesson-audio.entity';

@Injectable()
export class LessonsService {
  constructor(
    @InjectRepository(Lesson)
    private lessonRepo: Repository<Lesson>,

    @InjectRepository(LessonAudio)
    private lessonAudio: Repository<LessonAudio>,
  ) {}

  async getAudios(lessonId: number) {
    return this.lessonAudio.find({
      where: { lesson: { id: lessonId } }, // dùng relation
    });
  }
}
