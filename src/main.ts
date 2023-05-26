import { NestFactory } from '@nestjs/core';
import * as bodyParser from 'body-parser';
import { SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app/app.module';
import { createDocument } from './app/config/swagger/swagger';
import { ValidationPipe } from '@nestjs/common';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1');
  app.useGlobalPipes(new ValidationPipe({transform: true}));
  app.enableCors();
  app.use(bodyParser.json({limit: '50mb'}));
  app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
  SwaggerModule.setup('swagger', app, createDocument(app), {
    swaggerOptions: {
      filter: true,
      showRequestDuration: true,
    }
  });
  await app.listen(AppModule.port);
}
bootstrap();
