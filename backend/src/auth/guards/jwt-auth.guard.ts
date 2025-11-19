import {
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
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
