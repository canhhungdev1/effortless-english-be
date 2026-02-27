import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Course } from './course.entity';
import { Repository } from 'typeorm';
import { Lesson } from 'src/lessons/lesson.entity';

@Injectable()
export class CoursesService {
  constructor(
    @InjectRepository(Course)
    private courseRepo: Repository<Course>,

    @InjectRepository(Lesson)
    private lessonRepo: Repository<Lesson>,
  ) {}

  async getCourses() {
    return this.courseRepo.find({
      order: { createdAt: 'DESC' },
    });
  }

  getLessons(courseId: number) {
    return this.lessonRepo.find({
      where: { course: { id: courseId } }, // dùng relation
      order: { order: 'ASC' },
    });
  }
}
