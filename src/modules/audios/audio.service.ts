import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Audio } from './audio.entity';
import { Repository } from 'typeorm';
import { AudioSubtitle } from '../audio-subtitles/audio-subtitle.entity';

@Injectable()
export class AudioService {
  constructor(
    @InjectRepository(Audio)
    private audioRepo: Repository<Audio>,

    @InjectRepository(AudioSubtitle)
    private audioSubtitle: Repository<AudioSubtitle>,
  ) {}

  async getAudioSubtitles(audioId: number) {
    return this.audioSubtitle.find({
      where: { audio: { id: audioId } },
    });
  }
}
