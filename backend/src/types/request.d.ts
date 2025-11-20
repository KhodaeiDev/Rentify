import 'express';
import { JwtPayloadTypes } from './jwt-payload.type';

declare module 'express' {
  interface Request {
    user?: JwtPayloadTypes;
  }
}
