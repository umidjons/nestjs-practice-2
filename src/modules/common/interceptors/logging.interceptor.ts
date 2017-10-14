import { Interceptor, NestInterceptor, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';

@Interceptor()
export class LoggingInterceptor implements NestInterceptor {

  intercept(dataOrRequest, context: ExecutionContext, stream$: Observable<any>): Observable<any> {

    console.log('[LoggingInterceptor] Before...');

    const startTime = Date.now();

    return stream$.do(() => {
      console.log(`[LoggingInterceptor] After... ${Date.now() - startTime}ms`);
    });
  }
}
