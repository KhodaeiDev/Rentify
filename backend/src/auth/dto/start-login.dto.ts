import { Transform } from 'class-transformer';
import { IsNotEmpty, IsPhoneNumber, IsString } from 'class-validator';

export class StartLoginDto {
  @IsString({ message: 'شماره تلفن باید یک رشته باشد' })
  @IsPhoneNumber('IR', { message: 'شماره موبایل باید 11 رقم باشد' })
  @Transform(({ value }) => value.trim())
  @IsNotEmpty({ message: 'لطفا شماره موبایل را وارد کنید' })
  phone: string;
}
