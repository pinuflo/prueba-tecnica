import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsNotEmpty, IsString, Matches, Validate} from 'class-validator'
//import { ValidateRut } from 'src/app/shared/validators/rut';

export class UpdateStudentBodyDto {


    @ApiProperty({
        required: true,
        description: 'Nombre del usuario.',
        example: 'Mariano',
    })
    @IsString()
    @IsDefined()
    @IsNotEmpty()
    @Matches(/^[A-zÀ-ú]+( [A-zÀ-ú]+)?$/i, {
      message: 'Debe ser un nombre válido.',
    })
    public name: string;

    @ApiProperty({
        required: true,
        description: 'Rut del usuario',
        example: '141234324',
    })
    @IsString()
    @IsDefined()
    @IsNotEmpty()
    //@Validate(ValidateRut)
    public rut: string;

    @ApiProperty({
        required: true,
        description: 'Email',
        example: 'john.doe@mail.com',
      })
      @IsString()
      @IsDefined()
      @IsNotEmpty()
      @Matches(
        /^[A-Za-z0-9._%+-]{2,}@[a-zA-Z.+-]{2,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})$/,
        {
          message: 'Debe ser un correo valido',
        },
      )
      public email: string;

    @ApiProperty({
        required: true,
        description: 'ID de la carrera que estudiara el estudiante',
        example: '1',
    })
    @IsString()
    @IsDefined()
    @IsNotEmpty()
    public id_career: string;

}

