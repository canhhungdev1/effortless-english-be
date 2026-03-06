import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';

/**
 * Đây là nơi "bắt" tất cả mọi lỗi phát sinh trong hệ thống
 */
@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    // 1. Log lỗi vào console để debug (Quan trọng nhất!)
    console.error(exception); 

    // 2. Xác định xem đây là lỗi do mình chủ động ném ra (HttpException) 
    //    hay là lỗi hệ thống (như Database bị sập, lỗi undefined)
    const status = exception instanceof HttpException
      ? exception.getStatus()
      : HttpStatus.INTERNAL_SERVER_ERROR;

    // 3. Xử lý message cho người dùng
    // Với lỗi 500 (không biết trước), sẽ không gửi chi tiết lỗi kỹ thuật cho người dùng (lộ bảo mật!)
    const message = status === HttpStatus.INTERNAL_SERVER_ERROR
      ? 'An unexpected error occurred' 
      : (exception instanceof HttpException 
          ? exception.getResponse() 
          : 'Unknown error');

    // 4. Trả về format chuẩn
    response.status(status).json({
      success: false,
      message: typeof message === 'string' ? message : (message as any).message,
      data: null,
      timestamp: new Date().toISOString(),
    });
  }
}