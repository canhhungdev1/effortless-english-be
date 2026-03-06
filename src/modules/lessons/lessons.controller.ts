import { Controller, Get, Param } from '@nestjs/common';
import { LessonsService } from './lessons.service';
import { ApiOperation, ApiParam } from '@nestjs/swagger';

@Controller('lessons')
export class LessonsController {
  constructor(private readonly lessonsService: LessonsService) {}

  @Get(':lessonId/audios')
  @ApiOperation({ summary: 'Lấy danh sách audio theo bài học' })
  @ApiParam({ name: 'lessonId', required: true, description: 'ID bài học' })
  getAudios(@Param('lessonId') lessonId: number) {
    return this.lessonsService.getAudios(+lessonId);
  }
}
