import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Course } from './course.entity';
import { CoursesController } from './courses.controller';
import { CoursesService } from './courses.service';
import { Lesson } from 'src/lessons/lesson.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Course, Lesson])],
  providers: [CoursesService],
  controllers: [CoursesController],
})
export class CoursesModule {}
