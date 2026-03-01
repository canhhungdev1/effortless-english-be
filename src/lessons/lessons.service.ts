import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Lesson } from './lesson.entity';
import { Audio } from 'src/audios/audio.entity';

@Injectable()
export class LessonsService {
  constructor(
    @InjectRepository(Lesson)
    private lessonRepo: Repository<Lesson>,

    @InjectRepository(Audio)
    private audioRepo: Repository<Audio>,
  ) {}

  async getAudios(lessonId: number) {
    return this.audioRepo.find({
      where: { lesson: { id: lessonId } }, // dùng relation
    });
  }
}
