import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
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
  @ApiProperty({
    example: 'Mehran',
    description: 'نام کاربر',
  })
  @IsString({ message: 'نام باید یک رشته باشد' })
  @Length(3, 50, { message: 'نام باید بین ۳ تا ۵۰ کاراکتر باشه' })
  @IsNotEmpty({ message: 'نام کاربر الزامی می باشد' })
  first_name: string;

  @ApiProperty({
    example: 'Khodaei',
    description: 'نام خانوادگی',
  })
  @IsString({ message: 'نام خانوادگی باید یک رشته باشد' })
  @Length(3, 50, { message: 'نام باید بین ۳ تا ۵۰ کاراکتر باشه' })
  @IsNotEmpty({ message: 'نام خانوادگی الزامی می باشد' })
  last_name: string;

  @ApiProperty({
    example: '09141574097',
    description: 'شماره تلفن کاربر',
  })
  @IsString({ message: 'شماره تلفن باید یک رشته باشد' })
  @IsPhoneNumber('IR', { message: 'شماره موبایل باید 11 رقم باشد' })
  @Transform(({ value }) => value.trim())
  @IsNotEmpty({ message: 'لطفا شماره موبایل را وارد کنید' })
  phone: string;

  @ApiProperty({
    example: true,
    description: 'تایید قوانین سایت',
  })
  @IsBoolean({ message: 'تایید قوانین سایت باید به شکل boolean ارسال شود' })
  acceptedTerms: boolean;

  @ApiProperty({
    enum: UserRoleEnum,
    example: UserRoleEnum.USER,
    type: String,
    description: 'نقش کاربر',
  })
  @IsEnum(UserRoleEnum, {
    message: 'نقش کاربر باید یکی از مقدار های (user , admin , agent) باشد',
  })
  @IsNotEmpty({ message: 'نقشت چیه؟ چرا بهم نمیگی؟ بنگاهی یا کاربر معمولی؟😄' })
  role: UserRoleEnum;

  @ApiPropertyOptional({
    example: 'Iran Amlak',
    description: 'نام دفتر در صورتی که نقش کاربر agent باشد (بنگاه دار)',
    required: false,
  })
  @ValidateIf((o) => o.role === UserRoleEnum.AGENT)
  @IsString({ message: 'نام دفتر الزامی است' })
  @IsNotEmpty({ message: 'نام دفتر الزامی است' })
  officeName?: string;
}
