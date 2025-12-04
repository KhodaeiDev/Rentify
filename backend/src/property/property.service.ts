import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreatePropertyDto } from './dto/create-property.dto';
import { UpdatePropertyDto } from './dto/update-property.dto';
import { PropertyFilterDto } from './dto/property-filter.dto';
import { Property } from './entities/property.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsersService } from 'src/users/users.service';
import { LiaraStorageService } from 'src/liara-storage/liara-storage.service';
import { AdStatusEnum } from './enums/propStatus-enum';

@Injectable()
export class PropertyService {
  constructor(
    @InjectRepository(Property)
    private readonly propertyRepo: Repository<Property>,
    private readonly liaraStorage: LiaraStorageService,
    private readonly userService: UsersService,
  ) {}

  async create(
    createDto: CreatePropertyDto,
    userId: number,
    files: Express.Multer.File[],
  ) {
    const user = await this.userService.findOneById(userId);

    const uploadedImages = [];
    for (const file of files) {
      const upload = await this.liaraStorage.upload(file);

      uploadedImages.push(upload);
    }

    const code = await this.generateUniqueCode();
    const prop = this.propertyRepo.create({
      ...createDto,
      creator: user,
      images: uploadedImages,
      code,
    });

    return this.propertyRepo.save(prop);
  }

  // Filter + pagination
  async search(filter: PropertyFilterDto) {
    const qb = this.propertyRepo.createQueryBuilder('p');

    qb.where('p.status = :status', { status: AdStatusEnum.APPROVED });

    if (filter.type) qb.andWhere('p.type = :type', { type: filter.type });
    if (filter.city)
      qb.andWhere('p.city ILIKE :city', { city: `%${filter.city}%` });
    if (filter.area)
      qb.andWhere('p.area ILIKE :area', { area: `%${filter.area}%` });

    if (filter.minRent)
      qb.andWhere('p.rent >= :minRent', { minRent: filter.minRent });
    if (filter.maxRent)
      qb.andWhere('p.rent <= :maxRent', { maxRent: filter.maxRent });

    if (filter.minArea)
      qb.andWhere('p.builtArea >= :minArea', { minArea: filter.minArea });
    if (filter.maxArea)
      qb.andWhere('p.builtArea <= :maxArea', { maxArea: filter.maxArea });

    if (filter.rooms) qb.andWhere('p.rooms = :rooms', { rooms: filter.rooms });

    // amenities (Postgres): overlap operator &&  (requires amenities as text[])
    if (filter.amenities && filter.amenities.length) {
      qb.andWhere('p.amenities && :amenities', { amenities: filter.amenities });
    }

    // sorting
    if (filter.sort === 'price_asc') qb.orderBy('p.rent', 'ASC');
    else if (filter.sort === 'price_desc') qb.orderBy('p.rent', 'DESC');
    else qb.orderBy('p.createdAt', 'DESC');

    const page = filter.page || 1;
    const limit = Math.min(filter.limit || 20, 100);
    qb.skip((page - 1) * limit).take(limit);

    const [items, total] = await qb.getManyAndCount();
    return { items, total, page, limit };
  }

  async findOne(code: number) {
    const property = await this.propertyRepo.findOne({
      where: { code },
    });
    if (!property) {
      throw new NotFoundException('اگهی مورد نظر پیدا نشد');
    }
    return { property };
  }

  async update(
    id: number,
    dto: UpdatePropertyDto,
    userId: number,
    files: Express.Multer.File[],
  ) {
    const user = await this.userService.findOneById(userId);
    const prop = await this.propertyRepo.findOne({ where: { id } });

    if (prop.creator.id !== user.id)
      throw new ForbiddenException('شما اجازه ویرایش ین اگهی را ندارید');

    let newUploadedImages = [];
    if (files.length >= 1) {
      for (const file of prop.images) {
        await this.liaraStorage.remove(JSON.parse(file));
      }

      for (const file of files) {
        const upload = await this.liaraStorage.upload(file);
        newUploadedImages.push(upload);
      }

      prop.images = newUploadedImages;
    }

    const updateProp = Object.assign(
      {
        ...prop,
        status: AdStatusEnum.PENDING,
      },
      dto,
    );
    await this.propertyRepo.save(updateProp);

    return {
      property: updateProp,
      message: 'آگهی با موفقیت ویرایش شد و در انتظار تایید هست',
    };
  }

  async generateUniqueCode(): Promise<number> {
    let code: number;

    while (true) {
      code = Math.floor(1000 + Math.random() * 9000); // تولید یک کد 4 رقمی
      const exists = await this.propertyRepo.findOne({ where: { code } });
      if (!exists) break; // اگر نبود، همینو استفاده کن
    }

    return code;
  }
}
