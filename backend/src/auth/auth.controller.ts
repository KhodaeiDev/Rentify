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
}
