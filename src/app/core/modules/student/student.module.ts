import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { StudentController } from './student.controller';
import { StudentService } from './student.service';


@Module({
  imports: [HttpModule],
  providers: [
    ConfigService,StudentService],
  exports: [],
  controllers: [StudentController],
})
export class StudentModule { }