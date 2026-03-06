import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AudioSubtitle } from './modules/audio-subtitles/audio-subtitle.entity';
import { Audio } from './modules/audios/audio.entity';
import { Course } from './modules/courses/course.entity';
import { CoursesModule } from './modules/courses/courses.module';
import { Lesson } from './modules/lessons/lesson.entity';
import { LessonsModule } from './modules/lessons/lessons.module';
import { User } from './modules/users/user.entity';
import { databaseConfig } from './config/database.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV}`,
    }),

    TypeOrmModule.forRoot(databaseConfig),
    LessonsModule,
    CoursesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
