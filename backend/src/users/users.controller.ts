import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Patch,
  Req,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { Request } from 'express';
import {
  ApiBearerAuth,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { UserResponseDto } from './dto/userResponse.dto';
import { PropertyResponseDto } from 'src/property/dto/property-response.dto';

@ApiBearerAuth()
@ApiTags('Users👥')
@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @ApiOkResponse({
    description: 'عملیات موفقیت امیز بود',
    type: UserResponseDto,
  })
  @ApiNotFoundResponse({ description: 'کاربر مورد نظر یافت نشد' })
  @Get('/me')
  async getUSer(@Req() req: Request) {
    const userId = req.user?.userId;
    if (!userId) {
      throw new NotFoundException('کاربر شناسایی نشد!');
    }
    const user = await this.userService.getUserData(userId);
    return { user };
  }

  @Patch('/edit')
  async updateUser(@Body() updateUserDto: UpdateUserDto, @Req() req: Request) {
    const userId: number = req.user?.userId;
    const updateUser = await this.userService.updateUser(updateUserDto, userId);
    return { user: updateUser };
  }

  @ApiOkResponse({ description: 'لیست اگهی های من', type: PropertyResponseDto })
  @ApiNotFoundResponse({ description: 'کاربر مورد نظر یافت نشد' })
  @Get('/my-property')
  async getUserProperty(@Req() req: Request) {
    const userId = req.user?.userId;
    if (!userId) {
      throw new NotFoundException('کاربر شناسایی نشد!');
    }
    const properties = await this.userService.getUserPropertyData(userId);
    return properties;
  }
}
