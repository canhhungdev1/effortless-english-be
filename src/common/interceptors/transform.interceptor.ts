import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiResponse } from '../response/api-response';
import { RESPONSE_MESSAGE_KEY } from '../response/response-message.decorator';

@Injectable()
export class TransformInterceptor<T> implements NestInterceptor<T, ApiResponse<T>> {
  constructor(private reflector: Reflector) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<ApiResponse<T>> {
    return next.handle().pipe(
      map((data) => {
        // Lấy message từ decorator, nếu không có thì để mặc định
        const message = this.reflector.get<string>(RESPONSE_MESSAGE_KEY, context.getHandler()) 
                        || 'Request successful';
        
        return ApiResponse.success(data, message);
      }),
    );
  }
}