import { Controller, Get, Param } from '@nestjs/common';
import { LessonsService } from './lessons.service';

@Controller('lessons')
export class LessonsController {
  constructor(private readonly lessonsService: LessonsService) {}

  @Get('courses/:courseId')
  getLessons(@Param('courseId') courseId: number) {
    return this.lessonsService.getLessons(courseId);
  }

  @Get(':id')
  getDetail(@Param('id') id: number) {
    return this.lessonsService.getDetail(+id);
  }
}
