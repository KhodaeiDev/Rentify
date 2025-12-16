import { ApiProperty } from '@nestjs/swagger';
import { UserRoleEnum } from '../enums/userRole-enum';
import { Property } from 'src/property/entities/property.entity';

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

  @ApiProperty()
  saveProperties?: Property[];
}
