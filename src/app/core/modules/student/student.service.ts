import { HttpException, Injectable } from "@nestjs/common";
import { CreateStudentBodyDto } from "./dto/createStudentBody.dto";
import { Student } from "./student.entity";
import { QueryFailedError } from "typeorm";
import { UpdateStudentBodyDto } from "./dto/updateStudentBody.dto";
import { DeleteStudentParamsDto } from "./dto/deleteStudentParams.dto";
import { getStudentParamsDto } from "./dto/getStudentParams.dto";


@Injectable()
export class StudentService {

  constructor() {}
  

  async get(params:getStudentParamsDto) : Promise<any>
  {
    try{
        let student:Student = await Student.findOne({where: {id:params.id}})
        if(!student)
        {
            throw new HttpException({
                success: false,
                message: 'Student not found.'
              }, 400);            
        }
        return Promise.resolve({student})
    }
    catch(e)
    {
        if (e instanceof QueryFailedError) {
            console.error({error:  e.driverError.detail})
            throw new HttpException({
                success: false,
                message: 'Invalid career ID or duplicated DNI.'
              }, 400);            
        }
        throw e;
    }

  }

  async save(bodyDto:CreateStudentBodyDto) : Promise<any>
  {
    try{
        let student:any = new Student()
        student.name = bodyDto.name
        student.rut = bodyDto.rut
        student.email = bodyDto.email
        student.career = bodyDto.id_career
        student = await student.save()
        return Promise.resolve({id: student.id})
    }
    catch(e)
    {
        if (e instanceof QueryFailedError) {
            console.error({error:  e.driverError.detail})
            throw new HttpException({
                success: false,
                message: 'Revise el ID de la carrera y que el estudiante sea unico.'
              }, 400);            
        }
        throw e;
    }

  }

  async update(id:number, bodyDto:UpdateStudentBodyDto) : Promise<any>
  {
    try{
        let student:any = await Student.findOne({where: {id}})
        student.name = bodyDto.name
        student.rut = bodyDto.rut
        student.email = bodyDto.email
        student.career = bodyDto.id_career
        student = await student.save()
        return Promise.resolve({id: student.id})
    }
    catch(e)
    {
        if (e instanceof QueryFailedError) {
            console.error({error:  e.driverError.detail})
            throw new HttpException({
                success: false,
                message: 'Revise el ID de la carrera y que el estudiante sea unico.'
              }, 400);            
        }
        throw e;
    }

  }

  async delete(bodyDto:DeleteStudentParamsDto) : Promise<any>
  {
    try{
        let student:Student = await Student.findOne({where: {id:bodyDto.id}})
        if(!student)
        {
            throw new HttpException({
                success: false,
                message: 'Student not found.'
              }, 400);            
        }
        student = await student.remove()
        return Promise.resolve({message: 'Student removed.'})
    }
    catch(e)
    {
        if (e instanceof QueryFailedError) {
            console.error({error:  e.driverError.detail})
            throw new HttpException({
                success: false,
                message: 'Revise el ID de la carrera y que el estudiante sea unico.'
              }, 400);            
        }
        throw e;
    }

  }

}