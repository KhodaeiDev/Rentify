import {
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthGuard } from '@nestjs/passport';
import { IS_PUBLIC_KEY } from '../decorators/public.decorator';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  constructor(private reflector: Reflector) {
    super();
  }

  canActivate(context: ExecutionContext) {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (isPublic) {
      return true;
    }

    return super.canActivate(context);
  }

  handleRequest(err: any, user: any, info: any, context: ExecutionContext) {
    if (info?.name === 'TokenExpiredError') {
      throw new UnauthorizedException(
        'توکن شما منقضی شده است، دوباره وارد شوید.',
      );
    }

    if (err || !user) {
      throw (
        err ||
        new UnauthorizedException(
          'توکن شما نا معتبر است لطفا ابتدا وارد حساب کاربری خود شوید',
        )
      );
    }

    return user;
  }
}
