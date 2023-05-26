import {
    ValidatorConstraint,
    ValidatorConstraintInterface,
    ValidationArguments,
  } from 'class-validator';
  import { validateRut } from '../utils/rut.util';
  
  @ValidatorConstraint({ name: 'validateRut', async: false })
  export class ValidateRut implements ValidatorConstraintInterface {
    validate(rut: string, args: ValidationArguments) {
      return validateRut(rut);
    }
  
    defaultMessage(args: ValidationArguments) {
      // here you can provide default error message if validation failed
      return 'El rut no es valido';
    }
  }
  