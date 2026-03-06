import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Audio } from './audio.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AudioService {
  constructor(
    @InjectRepository(Audio)
    private audioRepo: Repository<Audio>,


  ) {}
}
