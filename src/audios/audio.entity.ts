import { AudioSubtitle } from 'src/audio-subtitles/audio-subtitle.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Lesson } from '../lessons/lesson.entity';


@Entity('audio')
export class Audio {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Column({ name: 'audio_url', length: 500 })
  audioUrl: string;

  @Column({ name: 'duration', type: 'int', nullable: true })
  duration: number;

  @Column({ name: 'order', type: 'int' })
  order: number;

  @ManyToOne(() => Lesson, (lesson) => lesson.audios)
  @JoinColumn({ name: 'lesson_id' })
  lesson: Lesson;

  @OneToMany(() => AudioSubtitle, (subtitle) => subtitle.audio)
  subtitles: AudioSubtitle[];
}
