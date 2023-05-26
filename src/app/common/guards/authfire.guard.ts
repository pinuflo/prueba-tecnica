/*
https://docs.nestjs.com/guards#guards
*/

import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { FirebaseAuthGuard } from '@whitecloak/nestjs-passport-firebase';

@Injectable()
export class AuthFireGuard extends FirebaseAuthGuard implements CanActivate {
  constructor(protected readonly reflector: Reflector){
    super(reflector);
  }
  async canActivate(
    context: ExecutionContext,
  ): Promise<boolean> {
    const isPublic = this.reflector.get<boolean>('public', context.getHandler());
    if(isPublic)
      return true;

    return Boolean(await super.canActivate(context));
  }
}
