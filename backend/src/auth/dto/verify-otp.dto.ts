import { Transform } from 'class-transformer';
import { IsNotEmpty, IsPhoneNumber, IsString, Matches } from 'class-validator';

export class VerifyOtpDto {
  @IsString({ message: 'شماره موبایل باید یک رشته باشد' })
  @IsPhoneNumber('IR', { message: 'شماره موبایلت ایرانی نیست؟! 🤔' })
  @Transform(({ value }) => value.trim())
  @IsNotEmpty({ message: 'شماره موبایل رو وارد نکردی' })
  phone: string;

  @IsString({ message: 'کد باید از نوع رشته باشد' })
  @Matches(/^\d{4}$/, { message: 'کد باید فقط عددی و ۴ رقم باشد' })
  code: string;
}
