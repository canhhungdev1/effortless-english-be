import { Module } from '@nestjs/common';
import { AudioService } from './audio.service';
import { AudioController } from './audio.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Audio } from './audio.entity';
import { AudioSubtitle } from '../audio-subtitles/audio-subtitle.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Audio, AudioSubtitle])],
  providers: [AudioService],
  controllers: [AudioController]
})
export class AudioModule {}
