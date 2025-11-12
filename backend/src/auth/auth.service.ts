import { BadRequestException, Injectable } from '@nestjs/common';
import { StartRegisterDto } from './dto/start-register.dto';
import { UsersService } from 'src/users/users.service';
import { OtpService } from 'src/otp/otp.service';
import { SmsService } from 'src/sms/sms.service';
import { VerifyOtpDto } from './dto/verify-otp.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly otpService: OtpService,
    private readonly smsService: SmsService,
  ) {}

  async startRegister(startRegisterDto: StartRegisterDto): Promise<void> {
    let phone = startRegisterDto.phone;

    await this.userService.findOneByPhone(phone);
    const code = await this.otpService.GenerateOtp(phone);

    await this.otpService.saveTempUser(phone, startRegisterDto);

    await this.smsService.sendOtp(phone, code);
  }

  async verifyOtpAndCreateUser(verifyOtpDto: VerifyOtpDto) {
    let { phone, code } = verifyOtpDto;

    const verifyOtp = await this.otpService.VerifyOtp(phone, code);
    if (!verifyOtp)
      throw new BadRequestException(
        'کد شما منقضی شده است یا صحیح نمی باشد. لطفا مججدا تلاش فرمایید',
      );

    const userData = await this.otpService.getTempUser(phone);
    if (!userData) throw new BadRequestException('زمان ثبت نام منقضی شده است');

    const user = await this.userService.create(userData);
    await this.otpService.deletTempUser(phone);

    //! Jwt add
    return user;
  }
}
