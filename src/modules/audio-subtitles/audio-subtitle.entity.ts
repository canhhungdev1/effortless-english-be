import { Audio } from 'src/modules/audios/audio.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity('audio_subtitle')
export class AudioSubtitle {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Column({ name: 'start_time', type: 'float' })
  startTime: number;

  @Column({ name: 'end_time', type: 'float' })
  endTime: number;

  @Column({ name: 'text_content', type: 'text' })
  textContent: string;

  @Column({ name: 'order', type: 'int' })
  order: number;

  @ManyToOne(() => Audio, (audio) => audio.subtitles)
  @JoinColumn({ name: 'audio_id' })
  audio: Audio;
}
