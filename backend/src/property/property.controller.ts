import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Query,
  BadRequestException,
  Req,
  UseInterceptors,
  UploadedFiles,
  NotFoundException,
} from '@nestjs/common';
import { PropertyService } from './property.service';
import { CreatePropertyDto } from './dto/create-property.dto';
import { UpdatePropertyDto } from './dto/update-property.dto';
import { PropertyFilterDto } from './dto/property-filter.dto';
import { Public } from 'src/auth/decorators/public.decorator';
import { Request } from 'express';
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
} from '@nestjs/swagger';
import { FilesInterceptor } from '@nestjs/platform-express';
import { ApiCreateProperty } from './decorators/api-create-property.decorator';
import { ApiPropertyFilter } from './decorators/api-property-filter.decorator.ts';
import { GetPropertyParamDto } from './dto/GetPropertyParam.dto';
import { ApiUpdateProperty } from './decorators/api-update-property.decorator';

@Controller('property')
export class PropertyController {
  constructor(private readonly propertyService: PropertyService) {}

  @ApiBearerAuth()
  @ApiCreateProperty()
  @UseInterceptors(FilesInterceptor('images', 5))
  @Post()
  async create(
    @Body() dto: CreatePropertyDto,
    @Req() req: Request,
    @UploadedFiles() images: Express.Multer.File[],
  ) {
    const userId = req.user?.userId;
    if (!userId) {
      throw new NotFoundException('کاربر شناسایی نشد!');
    }
    const property = await this.propertyService.create(dto, userId, images);
    return { property };
  }

  // GET /properties?city=Tehran&minRent=1000000&page=1&amenities[]=pool&amenities[]=gym
  @Public()
  @ApiPropertyFilter()
  @ApiOkResponse({ description: 'ارایه ای از املاک' })
  @Get()
  async search(@Query() filter: PropertyFilterDto) {
    return await this.propertyService.search(filter);
  }

  @ApiOperation({ summary: 'دریافت یک آگهی با کد یکتا' })
  @ApiOkResponse({ description: 'آگهی با موفقیت دریافت شد' })
  @ApiNotFoundResponse({ description: 'آگهی مورد نظر پیدا نشد' })
  @ApiBadRequestResponse({ description: 'کد آگهی نامعتبر است' })
  @Public()
  @Get(':code')
  async getOne(@Param() { code }: GetPropertyParamDto) {
    return await this.propertyService.findOne(code);
  }

  @ApiBearerAuth()
  @ApiUpdateProperty()
  @UseInterceptors(FilesInterceptor('images', 5))
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() dto: UpdatePropertyDto,
    @Req() req: Request,
    @UploadedFiles() images: Express.Multer.File[],
  ) {
    const numberId = Number(id);
    if (isNaN(numberId))
      throw new BadRequestException('شناسه آگهی نامعتبر است');

    const userId = req.user?.userId;
    if (!userId) {
      throw new NotFoundException('کاربر شناسایی نشد!');
    }
    return await this.propertyService.update(numberId, dto, userId, images);
  }
}
