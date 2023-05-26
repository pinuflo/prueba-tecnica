import { IsNotEmpty} from 'class-validator'

export class getStudentParamsDto {
    @IsNotEmpty()
    id: number;
}
