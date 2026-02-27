import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { Lesson } from '../lessons/lesson.entity';
import { LessonAudioText } from 'src/lesson-audio-text/lesson-audio-text.entity';

@Entity('lesson_audio')
export class LessonAudio {
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

  @OneToMany(() => LessonAudioText, (text) => text.audio)
  texts: LessonAudioText[];
}
