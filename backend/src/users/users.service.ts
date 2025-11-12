import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  @InjectRepository(User)
  private readonly userRepository: Repository<User>;

  async create(createUserDto: CreateUserDto) {
    const user = this.userRepository.create(createUserDto);
    await this.userRepository.save(user);

    return user;
  }

  async findOneByPhone(phone: string) {
    const user = await this.userRepository.findOneBy({
      phone,
    });
    if (user)
      throw new BadRequestException(
        'کاربری با این شماره موبایل قبلا ثبت نام کرده است',
      );

    return true;
  }
}
