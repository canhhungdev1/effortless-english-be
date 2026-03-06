import { TypeOrmModuleOptions } from '@nestjs/typeorm';

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
