import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
//import { InjectSentry, SentryService } from '@ntegral/nestjs-sentry';

export interface Response<T> {
  statusCode: number;
  message: string;
  data: T;
}

@Injectable()
export class TransformInterceptor<T>
  implements NestInterceptor<T, Response<T>> {
  constructor(
    //@InjectSentry() private readonly client: SentryService
    ) {}
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<any> {
    return next
      .handle()
      .pipe(
        map((data) => ({
          status: true,
          data: data,
        })),
        catchError((error: any) => {
          //this.client.instance().captureException(error);
          let http_status = HttpStatus.BAD_REQUEST
          if ('status' in error){
            http_status = error.status
          }
          throw new HttpException({
            status: false,
            message: error.message
          }, http_status);
        })

      );
  }
}
