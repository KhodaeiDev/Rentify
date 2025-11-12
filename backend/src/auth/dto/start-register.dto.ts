import { Transform } from 'class-transformer';
import {
  IsBoolean,
  IsEnum,
  IsNotEmpty,
  IsPhoneNumber,
  IsString,
  Length,
} from 'class-validator';
import { UserRoleEnum } from 'src/users/enums/userRole-enum';

export class StartRegisterDto {
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

  @IsBoolean({ message: 'تایید قوانین سایت باید به شکل boolean ارسال شود' })
  acceptedTerms: boolean;

  @IsEnum(UserRoleEnum)
  @IsNotEmpty({ message: 'نقشت چیه؟ چرا بهم نمیگی؟ بنگاهی یا کاربر معمولی؟😄' })
  role: UserRoleEnum;
}
