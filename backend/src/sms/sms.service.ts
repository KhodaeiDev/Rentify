import { BadRequestException, Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class SmsService {
  private readonly apiUrl = 'http://ippanel.com/api/select';
  private readonly user = process.env.OTP_USER;
  private readonly pass = process.env.OTP_PASS;
  private readonly fromNum = process.env.OTP_FROM_NUM;
  private readonly patternCode = process.env.OTP_PATTERN_CODE;

  async sendOtp(phone: string, code: number) {
    try {
      const response = await axios.post(this.apiUrl, {
        op: 'pattern',
        user: this.user,
        pass: this.pass,
        fromNum: this.fromNum,
        toNum: phone,
        patternCode: this.patternCode,
        inputData: [{ 'verification-code': +code }],
      });

      return response.data;
    } catch (error) {
      console.error('SMS Error:', error.response?.data || error.message);
      throw new BadRequestException('خطا در ارسال پیامک');
    }
  }
}
