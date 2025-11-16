import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsNotEmpty, IsPhoneNumber, IsString, Matches } from 'class-validator';

export class VerifyOtpDto {
  @ApiProperty({
    example: '09141574097',
    description: 'شماره تماس دریافت کننده کد تایید',
  })
  @IsString({ message: 'شماره موبایل باید یک رشته باشد' })
  @IsPhoneNumber('IR', { message: 'شماره موبایلت ایرانی نیست؟! 🤔' })
  @Transform(({ value }) => value.trim())
  @IsNotEmpty({ message: 'شماره موبایل رو وارد نکردی' })
  phone: string;

  @ApiProperty({
    example: '4187',
    description: 'کد تایید 4 رقمی',
  })
  @IsString({ message: 'کد باید از نوع رشته باشد' })
  @Matches(/^\d{4}$/, { message: 'کد باید فقط عددی و ۴ رقم باشد' })
  code: string;
}
