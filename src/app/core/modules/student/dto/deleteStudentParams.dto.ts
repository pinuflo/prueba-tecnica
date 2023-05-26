import { IsNotEmpty} from 'class-validator'

export class DeleteStudentParamsDto {
    @IsNotEmpty()
    id: number;
}

