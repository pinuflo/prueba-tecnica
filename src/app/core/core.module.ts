import { Module } from '@nestjs/common';
import { StudentController } from './modules/student/student.controller';
import { StudentModule } from './modules/student/student.module';

@Module({
  providers: [],
  imports: [StudentModule],
})
export class CoreModule {}
