import { Controller, Get, Param } from '@nestjs/common';
import { CourseService } from './course.service';
import { ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';
import { ResponseMessage } from 'src/common/response/response-message.decorator';

@Controller('courses')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  @Get()
  @ApiOperation({ summary: 'Lấy tất cả khóa học' })
  @ApiResponse({ status: 200, description: 'Danh sách khóa học' })
  @ResponseMessage('Lấy thông tin khóa học thành công')
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
