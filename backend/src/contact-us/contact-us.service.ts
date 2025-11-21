import { Injectable } from '@nestjs/common';
import { CreateContactUsDto } from './dto/create-contact-us.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ContactUs } from './entities/contact-us.entity';

@Injectable()
export class ContactUsService {
  constructor(
    @InjectRepository(ContactUs)
    private readonly contactRepo: Repository<ContactUs>,
  ) {}

  async create(createContactUsDto: CreateContactUsDto): Promise<void> {
    const createContact = this.contactRepo.create(createContactUsDto);
    await this.contactRepo.save(createContact);
  }
}
