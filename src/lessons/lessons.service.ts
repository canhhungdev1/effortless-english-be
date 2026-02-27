import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Lesson } from './lesson.entity';

@Injectable()
export class LessonsService {
  constructor(
    @InjectRepository(Lesson)
    private lessonRepo: Repository<Lesson>,
  ) {}

  async getLessons(courseId: number) {
    return this.lessonRepo.find({
      where: { course: { id: courseId } }, // dùng relation
      order: { id: 'ASC' },
    });
  }

  async getDetail(id: number) {
    return this.lessonRepo.findOne({
      where: { id },
      relations: ['audios', 'audios.texts'],
    });
  }
}
