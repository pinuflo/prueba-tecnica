import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsNotEmpty, IsString, Validate} from 'class-validator'
import { ValidateRut } from 'src/app/shared/validators/rut';

export class CreateStudentResponseDto {
    public id: number;
    public name: string;
    public rut: string;
    public email: string;
}

