import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { StartRegisterDto } from './dto/start-register.dto';
import { UsersService } from 'src/users/users.service';
import { OtpService } from 'src/otp/otp.service';
import { SmsService } from 'src/sms/sms.service';
import { VerifyOtpDto } from './dto/verify-otp.dto';
import { StartLoginDto } from './dto/start-login.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly otpService: OtpService,
    private readonly smsService: SmsService,
  ) {}

  async startRegister(startRegisterDto: StartRegisterDto): Promise<void> {
    let phone = startRegisterDto.phone;

    const user = await this.userService.findOneByPhone(phone);
    if (user)
      throw new BadRequestException(
        'کاربری با این شماره موبایل قبلا ثبت نام کرده است',
      );

    const code: number = await this.otpService.GenerateOtp(phone);

    await this.otpService.saveTempUser(phone, startRegisterDto);

    await this.smsService.sendOtp(phone, code);
  }

  async verifyOtpAndCreateUser(verifyOtpDto: VerifyOtpDto) {
    let { phone, code } = verifyOtpDto;

    const verifyOtp = await this.otpService.VerifyOtp(phone, code);
    if (!verifyOtp)
      throw new BadRequestException(
        'کد شما صحیح نمی باشد. لطفا مجددا تلاش فرمایید',
      );

    const userData = await this.otpService.getTempUser(phone);
    if (!userData) throw new BadRequestException('زمان ثبت نام منقضی شده است');

    const user = await this.userService.create(userData);
    await this.otpService.deletTempUser(phone);

    //! Jwt add
    return user;
  }

  async startLogin(startLoginDto: StartLoginDto) {
    const { phone } = startLoginDto;
    const user = await this.userService.findOneByPhone(phone);
    if (!user)
      throw new NotFoundException(
        'شما ثبت نام نکرده اید لطفا ابتدا ثبت نام کنید',
      );

    const code = await this.otpService.GenerateOtp(phone);
    await this.smsService.sendOtp(phone, code);
  }

  async verifyLoginOtp(verifyOtpDto: VerifyOtpDto) {
    let { phone, code } = verifyOtpDto;
    const user = await this.userService.findOneByPhone(phone);
    if (!user)
      throw new NotFoundException(
        'شما ثبت نام نکرده اید لطفا ابتدا ثبت نام کنید',
      );

    const isValid = await this.otpService.VerifyOtp(phone, String(code));
    if (!isValid)
      throw new BadRequestException(
        'کد شما صحیح نمی باشد. لطفا مجددا تلاش فرمایید',
      );

    //! JWT assign
  }
}
