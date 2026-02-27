import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/user.entity';
import { Course } from './courses/course.entity';
import { Lesson } from './lessons/lesson.entity';
import { LessonAudio } from './lesson-audio/lesson-audio.entity';
import { LessonAudioTextModule } from './lesson-audio-text/lesson-audio-text.module';
import { LessonAudioText } from './lesson-audio-text/lesson-audio-text.entity';
import { LessonsModule } from './lessons/lessons.module';
import { CoursesModule } from './courses/courses.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql', // MariaDB dùng mysql driver
      host: 'localhost',
      port: 3308,
      username: 'root',
      password: '123456',
      database: 'effortless-english',
      entities: [User, Course, Lesson, LessonAudio, LessonAudioText],
      synchronize: false, // quan trọng! không làm mất dữ liệu bảng cũ
    }),
    LessonsModule,CoursesModule 
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
