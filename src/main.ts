import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { TransformInterceptor } from './common/interceptors/transform.interceptor';
import { AllExceptionsFilter } from './common/filters/http-exception.filter';
import { ValidationPipe } from '@nestjs/common';

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

  // Đăng ký Interceptor
  app.useGlobalInterceptors(new TransformInterceptor(new Reflector()));

  // Đăng ký ExceptionsFilter
  app.useGlobalFilters(new AllExceptionsFilter());

  // Tự động bắt lỗi khi người dùng gửi thiếu field hoặc sai định dạng
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
