import { Controller, Get, Param } from '@nestjs/common';
import { LessonService } from './lesson.service';
import { ApiOperation, ApiParam } from '@nestjs/swagger';

@Controller('lessons')
export class LessonController {
  constructor(private readonly lessonsService: LessonService) {}

  @Get(':lessonId/audios')
  @ApiOperation({ summary: 'Lấy danh sách audio theo bài học' })
  @ApiParam({ name: 'lessonId', required: true, description: 'ID bài học' })
  getAudios(@Param('lessonId') lessonId: number) {
    return this.lessonsService.getAudios(+lessonId);
  }
}
