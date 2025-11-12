import { BadRequestException, Injectable } from '@nestjs/common';
import Redis from 'ioredis';

@Injectable()
export class OtpService {
  private client: Redis;

  constructor() {
    this.client = new Redis({
      host: process.env.REDIS_HOST,
      port: +process.env.REDIS_PORT,
    });
    this.client.on('connect', () => {
      console.log('✅ Redis connected');
    });
  }

  async GenerateOtp(phone: string) {
    const code: number = Math.floor(1000 + Math.random() * 9000);

    await this.client.set(`otp:${phone}`, code, 'EX', 120);

    return code;
  }

  async VerifyOtp(phone: string, code: number) {
    const codeInRedis: number = await +this.client.get(`otp:${phone}`);
    if (!codeInRedis) {
      throw new BadRequestException(
        'کد شما منقضی شده است لطفا دوباره تلاش فرمایید',
      );
    }

    if (code === codeInRedis) {
      await this.client.del(`otp:${phone}`);
      return true;
    }
    return false;
  }
}
