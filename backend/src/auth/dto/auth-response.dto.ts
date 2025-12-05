import { ApiProperty } from '@nestjs/swagger';
import { UserResponseDto } from 'src/users/dto/userResponse.dto';

export class AuthResponseDto {
  @ApiProperty()
  accessToken: string;

  @ApiProperty({ type: UserResponseDto })
  user: UserResponseDto;
}
