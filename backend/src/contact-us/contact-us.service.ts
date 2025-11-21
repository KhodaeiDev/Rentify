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

  async create(createContactUsDto: CreateContactUsDto) {
    const createContact = this.contactRepo.create(createContactUsDto);
    return await this.contactRepo.save(createContact);
  }
}
