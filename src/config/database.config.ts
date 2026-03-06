import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { AudioSubtitle } from 'src/modules/audio-subtitles/audio-subtitle.entity';
import { Audio } from 'src/modules/audios/audio.entity';
import { Course } from 'src/modules/courses/course.entity';
import { Lesson } from 'src/modules/lessons/lesson.entity';
import { User } from 'src/modules/users/user.entity';

export const databaseConfig: TypeOrmModuleOptions = {
  type: 'mysql', // MariaDB dùng mysql driver
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '123456',
  database: 'effortless_english',
  autoLoadEntities: true,
  synchronize: false,
};
