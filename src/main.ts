import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Cấu hình Swagger
  const config = new DocumentBuilder()
    .setTitle('Effortless English Learning API')
    .setDescription('API cho ứng dụng học tiếng Anh')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document); // truy cập: http://localhost:3000/api


  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
