import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Patch,
  Req,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { Request } from 'express';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('Users👥')
@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get('/me')
  async getUSer(@Req() req: Request) {
    const { userId } = req.user;
    if (!userId) {
      throw new BadRequestException('کاربر شناسایی نشد!');
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
}
