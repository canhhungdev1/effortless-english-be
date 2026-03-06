import { Controller, Get, Param } from '@nestjs/common';
import { AudioService } from './audio.service';
import { ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';
import { ResponseMessage } from 'src/common/response/response-message.decorator';

@Controller('audios')
export class AudioController {
  constructor(private readonly audioService: AudioService) {}

  @Get(':audioId/subtitles')
  @ApiOperation({ summary: 'Lấy danh sách subtitles theo audioId' })
  @ApiParam({ name: 'audioId', required: true, description: 'ID file audio' })
  getAudios(@Param('audioId') audioId: number) {
    return this.audioService.getAudioSubtitles(audioId);
  }
}
