import { applyDecorators, UseGuards } from '@nestjs/common';
import { AuthFireGuard } from '../guards/authfire.guard';

export interface Role{
  name: string,
}

export function Auth() {
  return applyDecorators(
    UseGuards(AuthFireGuard)
  );
}