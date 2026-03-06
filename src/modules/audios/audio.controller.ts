import { Controller, Get } from '@nestjs/common';
import { AudioService } from './audio.service';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ResponseMessage } from 'src/common/response/response-message.decorator';

@Controller('audios')
export class AudioController {
  constructor(private readonly audioService: AudioService) {}
}
