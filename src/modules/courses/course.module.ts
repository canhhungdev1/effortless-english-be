import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Course } from './course.entity';
import { CourseController } from './course.controller';
import { CourseService } from './course.service';
import { Lesson } from 'src/modules/lessons/lesson.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Course, Lesson])],
  providers: [CourseService],
  controllers: [CourseController],
})
export class CourseModule {}
