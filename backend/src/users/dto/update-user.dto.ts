import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsEmail, IsOptional, IsString, MinLength } from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {
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
