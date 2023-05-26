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


export interface Response<T> {
  message: string;
  data: T;
}

@Injectable()
export class TransformInterceptor<T>
  implements NestInterceptor<T, Response<T>> {
  constructor(

    ) {}
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<any> {
    return next
      .handle()
      .pipe(
        map((data) => ({
          success: true,
          data: data,
        })),
        catchError((error: any) => {

          let http_status = HttpStatus.BAD_REQUEST
          let message = error.message
          if ('status' in error){
            http_status = error.status
          }
          if ('response' in error){
            message = (error as any).response.message
          }

          throw new HttpException({
            success: false,
            message: message
          }, http_status);
        })

      );
  }
}
