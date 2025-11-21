import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import {
  IsEmail,
  IsNotEmpty,
  IsPhoneNumber,
  IsString,
  Length,
} from 'class-validator';

export class CreateContactUsDto {
  @ApiProperty({
    example: 'Mehran',
    description: 'نام کاربر',
  })
  @IsString({ message: 'نام کاربر باید یک رشته باشد' })
  @Length(3, 50, { message: 'اسم باید بین ۳ تا ۵۰ کاراکتر باشه' })
  @IsNotEmpty({ message: 'نام کاربر الزامی می باشد' })
  first_name: string;

  @ApiProperty({
    example: 'Khodaei',
    description: 'نام خانوادگی',
  })
  @IsString()
  @Length(3, 50, { message: 'اسم باید بین ۳ تا ۵۰ کاراکتر باشه' })
  @IsNotEmpty({ message: 'نام خانوادگی الزامی می باشد' })
  last_name: string;

  @ApiProperty({
    example: 'example@email.com',
    description: 'ایمیل کاربر',
  })
  @IsEmail({}, { message: 'لطفا ایمیل را در فرمت صحیح وارد کنید' })
  @IsString({ message: 'ایمیل باید یک رشته باشد' })
  email: string;

  @ApiProperty({
    example: '09141574097',
    description: 'شماره تلفن کاربر',
  })
  @IsString()
  @IsPhoneNumber('IR', { message: 'شماره موبایل باید 11 رقم باشد' })
  @Transform(({ value }) => value.trim())
  @IsNotEmpty({ message: 'لطفا شماره موبایل را وارد کنید' })
  phone: string;

  @ApiProperty({
    example: 'از خدمات شما سپاسگذارم',
    description: 'پیغام کاربر',
  })
  @IsString({ message: 'لطفا پیام را در قالب متن ارسال کنید' })
  @Length(3, 2500, { message: 'پیام باید بین ۳ تا 2500 کاراکتر باشه' })
  @IsNotEmpty({ message: 'فیلد پیام الزامی می باشد' })
  message: string;
}
