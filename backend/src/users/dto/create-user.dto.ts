import { Transform } from 'class-transformer';
import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
  IsString,
  Length,
  Matches,
  MinLength,
} from 'class-validator';
import { UserRoleEnum } from '../enums/userRole-enum';

export class CreateUserDto {
  @IsString()
  @Length(3, 50, { message: 'اسم باید بین ۳ تا ۵۰ کاراکتر باشه' })
  @IsNotEmpty({ message: 'نام کاربر الزامی می باشد' })
  first_name: string;

  @IsString()
  @Length(3, 50, { message: 'اسم باید بین ۳ تا ۵۰ کاراکتر باشه' })
  @IsNotEmpty({ message: 'نام خانوادگی الزامی می باشد' })
  last_name: string;

  @IsString()
  @IsPhoneNumber('IR', { message: 'شماره موبایلت ایرانی نیست؟! 🤔' })
  @Transform(({ value }) => value.trim())
  @IsNotEmpty({ message: 'چرا شمارتو وارد نکردی 😑 ' })
  phone: string;

  @IsEnum(UserRoleEnum)
  @IsNotEmpty({ message: 'نقشت چیه؟ چرا بهم نمیگی؟ بنگاهی یا کاربر معمولی؟😄' })
  role: string;

  @IsOptional()
  @IsEmail({}, { message: 'ایمیلت که شبیه ایمیل نیست داداش! 🙄' })
  @IsString({ message: 'ایمیل باید یک رشته باشد' })
  email: string;

  @IsOptional()
  @IsString({ message: 'رمز عبور باید یک رشته باشد' })
  @MinLength(8, { message: 'رمز عبور باید حداقل دارای 8 کاراکتر باشد' })
  password: string;

  @IsOptional()
  @IsString({ message: 'شغل باید یک رشته باشد' })
  job: string;

  @IsString()
  @IsOptional()
  profile_picture: string;
}
