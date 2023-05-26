import { IsNotEmpty} from 'class-validator'

export class updateStudentParamsDto {
    @IsNotEmpty()
    id: number;
}
