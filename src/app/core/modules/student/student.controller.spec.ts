import { Test, TestingModule } from '@nestjs/testing';
import { StudentController } from './student.controller';
import { ConfigService } from '@nestjs/config';
import { StudentService } from './student.service';
import { ValidateRut } from 'src/app/shared/validators/rut';

const mockStudent = {id: 1, name: 'pablo', email: 'igna@gmail.com', rut: '2-7' };

export class StudentServiceFake {
  public async get(): Promise<void> {}
  public async save(): Promise<void> {}
  public async delete(): Promise<void> {}
}

describe('StudentController', () => {
  let controller: StudentController;
  let service: StudentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StudentController],
      providers: [ConfigService,
        {
          provide: StudentService,
          useClass: StudentServiceFake,
        },
      ]
    }).compile();

    controller = module.get<StudentController>(StudentController);
    service = module.get<StudentService>(StudentService);
  });

  describe('get student', () => {
    it('should return a student', async () => {
      const expectedResult = mockStudent;
      jest.spyOn(service, 'get').mockImplementation(() => Promise.resolve(mockStudent) );
      const params = {id: mockStudent.id};
      expect(await controller.getStudent(params)).toBe(expectedResult);
    });
  });

  describe('create student', () => {
    it('should return a student id', async () => {
      const expectedResult = {id: 1};
      jest.spyOn(service, 'save').mockImplementation(() => Promise.resolve(expectedResult) );
      const body = {...mockStudent, id: undefined, id_career: '1'};
      expect(await controller.createStudent({},body)).toBe(expectedResult);
    });
  });  

  describe('delete student', () => {
    it('should return deletion success', async () => {
      const expectedResult = {success: true};
      jest.spyOn(service, 'delete').mockImplementation(() => Promise.resolve(expectedResult) );
      const params = {id: mockStudent.id};
      expect(await controller.deleteStudent(params)).toBe(expectedResult);
    });

    it('should return deletion fail', async () => {
      const expectedResult = {success: false};
      jest.spyOn(service, 'delete').mockImplementation(() => Promise.resolve(expectedResult) );
      const params = {id: mockStudent.id};
      expect(await controller.deleteStudent(params)).toBe(expectedResult);
    });

  }); 


});
