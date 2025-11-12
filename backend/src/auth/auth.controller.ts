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
    await this.authService.startRegister(startRegisterDto);
    return 'موفقیت امیز بود';
  }

  @Post('register/verify')
  async verifyUser(@Body() verifyOtpDto: VerifyOtpDto) {
    const data = await this.authService.verifyOtpAndCreateUser(verifyOtpDto);
    return data;
  }

  @Post('login/start')
  async startLogin(@Body() startLoginDto: StartLoginDto) {
    const data = await this.authService.startLogin(startLoginDto);
    return data;
  }

  @Post('login/verify')
  async verifyLoginOtp(@Body() verifyLoginOtp: VerifyOtpDto) {
    const data = await this.authService.verifyLoginOtp(verifyLoginOtp);
    return data;
  }
}
