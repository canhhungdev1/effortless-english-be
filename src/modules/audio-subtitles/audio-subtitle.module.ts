import { Module } from '@nestjs/common';
import { AudioSubtitleService } from './audio-subtitle.service';
import { AudioSubtitleController } from './audio-subtitle.controller';

@Module({
  providers: [AudioSubtitleService],
  controllers: [AudioSubtitleController]
})
export class AudioSubtitleModule {}
