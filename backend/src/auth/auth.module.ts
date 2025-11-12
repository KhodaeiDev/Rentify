import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersService } from 'src/users/users.service';
import { UsersModule } from 'src/users/users.module';
import { OtpModule } from 'src/otp/otp.module';
import { SmsModule } from 'src/sms/sms.module';

@Module({
  imports: [UsersModule, OtpModule, SmsModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
