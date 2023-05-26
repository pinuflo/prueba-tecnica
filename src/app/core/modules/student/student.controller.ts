import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put, Req } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreateStudentResponseDto } from './dto/createStudentResponse.dto';
import { CreateStudentBodyDto } from './dto/createStudentBody.dto';
import { StudentService } from './student.service';
import { DeleteStudentParamsDto } from './dto/deleteStudentParams.dto';
import { updateStudentParamsDto } from './dto/updateStudentParams.dto';
import { UpdateStudentBodyDto } from './dto/updateStudentBody.dto';
import { getStudentParamsDto } from './dto/getStudentParams.dto';

@Controller('core/student')
export class StudentController {

  constructor(private readonly studentService:StudentService) {}

  @Get(':id')
  async getStudent(
    @Param() params: getStudentParamsDto
  ): Promise<any> {

      let student = await this.studentService.get(params);
      return  student ;
      
  }

  @ApiOperation({
    summary:
      // tslint:disable-next-line: max-line-length
      'Registra a un estudiante',
  })
  @Post('/')
  @ApiResponse({ status: 200, type: CreateStudentResponseDto })
  async createStudent(
  @Req() req,
  @Body() bodyDto: CreateStudentBodyDto,
  ): Promise<any> {

      let savedStudent = await this.studentService.save(bodyDto);
      return  savedStudent ;

  }


  @ApiOperation({
    summary:
      // tslint:disable-next-line: max-line-length
      'Modifica a un estudiante',
    })
    @Put('/:id')
    @ApiResponse({ status: 200, type: CreateStudentResponseDto })
    async updateStudent(
      @Param() params: updateStudentParamsDto,
      @Body() bodyDto: UpdateStudentBodyDto,
    ): Promise<any> {

        let updatedStudent = await this.studentService.update(params.id,bodyDto);
        return  updatedStudent ;

    }  

  @ApiOperation({
    summary:
      'Elimina a un estudiante',
    })
    @Delete(':id')
    @ApiResponse({ status: 200, type: CreateStudentResponseDto })
    async deleteStudent(
    @Param() params: DeleteStudentParamsDto
    ): Promise<any> {

        let deletedStudent = await this.studentService.delete(params);
        return  deletedStudent ;

    }


}
