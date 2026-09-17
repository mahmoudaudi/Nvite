import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable, map } from 'rxjs';

/** Wraps successful responses as { data, timestamp }. Errors are handled by the exception filter. */
@Injectable()
export class ResponseInterceptor<T> implements NestInterceptor<T, { data: T; timestamp: string }> {
  intercept(_context: ExecutionContext, next: CallHandler): Observable<{ data: T; timestamp: string }> {
    return next.handle().pipe(
      map((data) => ({
        data,
        timestamp: new Date().toISOString(),
      })),
    );
  }
}
