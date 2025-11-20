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
    const firstUser = await this.userRepository.count();

    if (createUserDto.role !== UserRoleEnum.AGENT)
      delete createUserDto.officeName;

    const user = this.userRepository.create({
      ...createUserDto,
      role: firstUser < 1 ? UserRoleEnum.ADMIN : createUserDto.role,
    });
    await this.userRepository.save(user);

    return user;
  }

  async findOneByPhone(phone: string) {
    const user = await this.userRepository.findOneBy({
      phone,
    });
    return user ? user : false;
  }

  async getUserData(userId: number) {
    return await this.findOneById(userId);
  }

  async findOneById(id: number) {
    const user = await this.userRepository.findOneBy({
      id,
    });
    if (!user) throw new BadRequestException('کاربر مورد نظر یافت نشد');

    return user;
  }

  async updateUser(updateUserDto: UpdateUserDto, userId: number) {
    const user = await this.findOneById(userId);

    const updateUserInfo = this.userRepository.merge(user, updateUserDto);
    await this.userRepository.save(updateUserInfo);

    return await this.findOneById(userId);
  }
}
