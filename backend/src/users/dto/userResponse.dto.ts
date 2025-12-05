import { ApiProperty } from '@nestjs/swagger';
import { UserRoleEnum } from '../enums/userRole-enum';

export class UserResponseDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  first_name: string;

  @ApiProperty()
  last_name: string;

  @ApiProperty()
  phone: string;

  @ApiProperty()
  role: UserRoleEnum;
}
