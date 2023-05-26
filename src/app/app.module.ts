import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { ConfigService } from '@nestjs/config';
import { CoreModule } from './core/core.module';
import { FirebaseAuthModule } from '@whitecloak/nestjs-passport-firebase';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { TransformInterceptor } from './shared/transform.interceptor';
import { ScheduleModule } from '@nestjs/schedule';
import dbConfig from './config/database/db.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommandModule } from 'nestjs-command';


@Module({
  imports: [ 
    HttpModule,
    CoreModule,
    ConfigModule.forRoot({ isGlobal: true, load:[dbConfig] }),
    TypeOrmModule.forRootAsync({
      inject:[ConfigService],
      useFactory: async (configService: ConfigService) => ({...configService.get('database')})
    }),
    ScheduleModule.forRoot(),
    CommandModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: TransformInterceptor,
    },
  ],
})
export class AppModule{
  static port: number | string;

  constructor(private readonly _configService: ConfigService) {
    AppModule.port = this._configService.get('PORT')
  }
}
