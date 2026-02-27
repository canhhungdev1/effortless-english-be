import { Controller, Get, Param } from '@nestjs/common';
import { CoursesService } from './courses.service';

@Controller('courses')
export class CoursesController {
  constructor(private readonly courseService: CoursesService) {}

  @Get()
  getCourses() {
    return this.courseService.getCourses();
  }

  @Get(":courseId/lessons")
  getLessons(@Param('courseId') courseId: number) {
    return this.courseService.getLessons(courseId);
  }


}
