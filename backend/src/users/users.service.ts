import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { UserRoleEnum } from './enums/userRole-enum';

@Injectable()
export class UsersService {
  @InjectRepository(User)
  private readonly userRepository: Repository<User>;

  async create(createUserDto: CreateUserDto) {
    if (createUserDto.role !== UserRoleEnum.AGENT)
      delete createUserDto.officeName;

    const user = this.userRepository.create(createUserDto);
    await this.userRepository.save(user);

    return user;
  }

  async findOneByPhone(phone: string) {
    const user = await this.userRepository.findOneBy({
      phone,
    });
    return user ? user : false;
  }
}
