import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { StartRegisterDto } from './dto/start-register.dto';
import { VerifyOtpDto } from './dto/verify-otp.dto';
import { StartLoginDto } from './dto/start-login.dto';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('Auth🔒')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOkResponse({ description: 'عملیات با موفقیت انجام شد' })
  @ApiBadRequestResponse({
    description: 'کاربری با این شماره موبایل قبلا ثبت نام کرده است',
  })
  @Post('register/start')
  async startRegister(@Body() startRegisterDto: StartRegisterDto) {
    return await this.authService.startRegister(startRegisterDto);
  }

  @ApiBadRequestResponse({
    description:
      'کد شما صحیح نمیباشد یا زمان ثبت نام منقی شده است (زمان کد 3 دقیقه میباشد)',
  })
  @ApiCreatedResponse({
    description: 'ثبت نام با موفقیت انجام شد',
    example: {
      accessToken: 'JWT Token',
      user: {
        first_name: 'test',
        phone: '09141574097',
      },
    },
  })
  @Post('register/verify')
  async verifyUser(@Body() verifyOtpDto: VerifyOtpDto) {
    return await this.authService.verifyOtpAndCreateUser(verifyOtpDto);
  }

  @ApiOkResponse({ description: 'عملیات با موفقیت انجام شد (ارسال کد)' })
  @Post('login/start')
  async startLogin(@Body() startLoginDto: StartLoginDto) {
    return await this.authService.startLogin(startLoginDto);
  }

  @ApiNotFoundResponse({
    description: 'شما قبلا ثبت نام نکرده اید لطفا ابتدا ثبت نام کنید',
  })
  @ApiBadRequestResponse({
    description: 'کد شما صحیح نمیباشد',
  })
  @ApiOkResponse({
    description: 'ثبت نام با موفقیت انجام شد',
    example: {
      accessToken: 'JWT Token',
      user: {
        first_name: 'test',
        phone: '09141574097',
      },
    },
  })
  @Post('login/verify')
  async verifyLoginOtp(@Body() verifyOtpDto: VerifyOtpDto) {
    return await this.authService.verifyLoginOtp(verifyOtpDto);
  }
}
