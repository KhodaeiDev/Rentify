import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { UserRoleEnum } from './enums/userRole-enum';
import { PropertyService } from 'src/property/property.service';
import { Property } from 'src/property/entities/property.entity';
import { GetPropertyParamDto } from 'src/property/dto/GetPropertyParam.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(Property)
    private readonly propertyRepository: Repository<Property>,
  ) {}

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
    const user = await this.userRepository.findOne({
      where: { id },
      relations: ['saveProperties'],
    });
    if (!user) throw new NotFoundException('کاربر مورد نظر یافت نشد');

    return user;
  }

  async updateUser(updateUserDto: UpdateUserDto, userId: number) {
    const user = await this.findOneById(userId);

    const updateUserInfo = this.userRepository.merge(user, updateUserDto);
    await this.userRepository.save(updateUserInfo);

    return await this.findOneById(userId);
  }

  async getUserPropertyData(userId: number) {
    const user = await this.findOneById(userId);

    const properties = await this.propertyRepository.find({
      where: { creator: { id: user.id } },
    });

    return properties;
  }

  async save({ code }: GetPropertyParamDto, userId: number) {
    const property = await this.propertyRepository.findOne({
      where: { code },
    });
    if (!property) throw new BadRequestException('آگهی مورد نظر پیدا نشد');

    const user = await this.findOneById(userId);
    const propertyIndex = user.saveProperties.findIndex(
      (propert) => propert.code === code,
    );

    if (propertyIndex > -1) user.saveProperties.splice(propertyIndex, 1);
    else user.saveProperties.push(property);

    await this.userRepository.save(user);
  }
}
