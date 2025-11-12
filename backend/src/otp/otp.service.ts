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

    await this.client.set(`otp:${phone}`, code, 'EX', 180);

    return code;
  }

  async VerifyOtp(phone: string, code: string) {
    const codeInRedis = await this.client.get(`otp:${phone}`);

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

  async saveTempUser(phone: string, data: any) {
    await this.client.set(`user:${phone}`, JSON.stringify(data), 'EX', 180);
  }

  async getTempUser(phone: string) {
    const raw = await this.client.get(`user:${phone}`);
    return raw ? JSON.parse(raw) : null;
  }

  async deletTempUser(phone: string) {
    await this.client.del(`user:${phone}`);
  }
}
