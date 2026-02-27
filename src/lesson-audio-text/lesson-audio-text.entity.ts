import { LessonAudio } from 'src/lesson-audio/lesson-audio.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity('lesson_audio_text')
export class LessonAudioText {
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

  @ManyToOne(() => LessonAudio, (audio) => audio.texts)
  @JoinColumn({ name: 'lesson_audio_id' })
  audio: LessonAudio;
}
