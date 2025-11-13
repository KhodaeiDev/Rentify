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
import { VerifyOtpDto } from './dto/verify-otp.dto';
import { StartLoginDto } from './dto/start-login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register/start')
  async startRegister(@Body() startRegisterDto: StartRegisterDto) {
    return await this.authService.startRegister(startRegisterDto);
  }

  @Post('register/verify')
  async verifyUser(@Body() verifyOtpDto: VerifyOtpDto) {
    return await this.authService.verifyOtpAndCreateUser(verifyOtpDto);
  }

  @Post('login/start')
  async startLogin(@Body() startLoginDto: StartLoginDto) {
    return await this.authService.startLogin(startLoginDto);
  }

  @Post('login/verify')
  async verifyLoginOtp(@Body() verifyLoginOtp: VerifyOtpDto) {
    return await this.authService.verifyLoginOtp(verifyLoginOtp);
  }
}
