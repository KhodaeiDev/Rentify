import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ContactUsService } from './contact-us.service';
import { CreateContactUsDto } from './dto/create-contact-us.dto';
import { Public } from 'src/auth/decorators/public.decorator';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Contact Us💬')
@Controller('contact-us')
export class ContactUsController {
  constructor(private readonly contactUsService: ContactUsService) {}

  @Public()
  @ApiCreatedResponse({
    description: 'پیام شما با موفقیت ثبت شد',
  })
  @Post()
  async create(@Body() createContactUsDto: CreateContactUsDto) {
    return await this.contactUsService.create(createContactUsDto);
  }
}
