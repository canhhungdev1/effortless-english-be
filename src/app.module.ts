import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/user.entity';
import { Course } from './courses/course.entity';
import { Lesson } from './lessons/lesson.entity';


import { LessonsModule } from './lessons/lessons.module';
import { CoursesModule } from './courses/courses.module';
import { AudioSubtitle } from './audio-subtitles/audio-subtitle.entity';
import { Audio } from './audios/audio.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql', // MariaDB dùng mysql driver
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '123456',
      database: 'effortless-english',
      entities: [User, Course, Lesson, Audio, AudioSubtitle],
      synchronize: true, // quan trọng! không làm mất dữ liệu bảng cũ
    }),
    LessonsModule,
    CoursesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
