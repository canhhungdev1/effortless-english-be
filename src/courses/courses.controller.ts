import { Controller, Get, Param } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';

@Controller('courses')
export class CoursesController {
  constructor(private readonly courseService: CoursesService) {}

  @Get()
  @ApiOperation({ summary: 'Lấy tất cả khóa học' })
  @ApiResponse({ status: 200, description: 'Danh sách khóa học' })
  getCourses() {
    return this.courseService.getCourses();
  }

  @Get(':courseId/lessons')
  @ApiOperation({ summary: 'Lấy danh sách lesson theo khóa học' })
  @ApiParam({ name: 'courseId', required: true, description: 'ID khóa học' })
  @ApiResponse({
    status: 200,
    description: 'Danh sách lesson',
  })
  getLessons(@Param('courseId') courseId: number) {
    return this.courseService.getLessons(courseId);
  }
}
