import { Injectable } from '@nestjs/common';
import { StartRegisterDto } from './dto/start-register.dto';
import { UsersService } from 'src/users/users.service';
import { OtpService } from 'src/otp/otp.service';
import { SmsService } from 'src/sms/sms.service';

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

    await this.smsService.sendOtp(phone, code);
  }

  async verifyOtpAndCreateUser() {}
}
