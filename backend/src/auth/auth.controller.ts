import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { StartRegisterDto } from './dto/start-register.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register/start')
  startRegister(@Body() startRegisterDto: StartRegisterDto) {
    return this.authService.startRegister(startRegisterDto);
  }
}
