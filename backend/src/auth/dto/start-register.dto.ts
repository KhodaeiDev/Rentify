import { Transform } from 'class-transformer';
import {
  IsBoolean,
  IsEnum,
  IsNotEmpty,
  IsPhoneNumber,
  IsString,
  Length,
  ValidateIf,
} from 'class-validator';
import { UserRoleEnum } from 'src/users/enums/userRole-enum';

export class StartRegisterDto {
  @IsString({ message: 'نام باید یک رشته باشد' })
  @Length(3, 50, { message: 'نام باید بین ۳ تا ۵۰ کاراکتر باشه' })
  @IsNotEmpty({ message: 'نام کاربر الزامی می باشد' })
  first_name: string;

  @IsString({ message: 'نام خانوادگی باید یک رشته باشد' })
  @Length(3, 50, { message: 'نام باید بین ۳ تا ۵۰ کاراکتر باشه' })
  @IsNotEmpty({ message: 'نام خانوادگی الزامی می باشد' })
  last_name: string;

  @IsString({ message: 'شماره تلفن باید یک رشته باشد' })
  @IsPhoneNumber('IR', { message: 'شماره موبایل باید 11 رقم باشد' })
  @Transform(({ value }) => value.trim())
  @IsNotEmpty({ message: 'لطفا شماره موبایل را وارد کنید' })
  phone: string;

  @IsBoolean({ message: 'تایید قوانین سایت باید به شکل boolean ارسال شود' })
  acceptedTerms: boolean;

  @IsEnum(UserRoleEnum, {
    message: 'نقش کاربر باید یکی از مقدار های (user , admin , agent) باشد',
  })
  @IsNotEmpty({ message: 'نقشت چیه؟ چرا بهم نمیگی؟ بنگاهی یا کاربر معمولی؟😄' })
  role: UserRoleEnum;

  @ValidateIf((o) => o.role === UserRoleEnum.AGENT)
  @IsString({ message: 'نام دفتر الزامی است' })
  @IsNotEmpty({ message: 'نام دفتر الزامی است' })
  officeName?: string;
}
