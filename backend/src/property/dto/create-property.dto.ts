// src/properties/dto/create-property.dto.ts
import {
  IsString,
  IsOptional,
  IsEnum,
  IsNumber,
  IsArray,
  IsNotEmpty,
} from 'class-validator';
import { PropertyEnum } from '../enums/property-enum';
import { UnitType } from '../enums/unitType-enum';
import { OrientationEnum } from '../enums/orientation-enum';
import { Transform, Type } from 'class-transformer';

export class CreatePropertyDto {
  // تایتل ملک
  @IsString() title: string;

  // توضیحات کلی
  @IsOptional() @IsString() description?: string;

  //  نوع ملک و نوع واحد
  @IsEnum(PropertyEnum) type: PropertyEnum;

  @IsEnum(UnitType)
  unitType: UnitType;

  //شهر و منطقه و آدرس کل
  city: string;
  @IsString() area: string;
  @IsString() address: string;

  //موقعیت مکانی (عرض و طول جغرافیایی)
  @IsOptional() @IsNumber() @Type(() => Number) lat?: number;
  @IsOptional() @IsNumber() @Type(() => Number) lng?: number;

  //موقعیت جغرافیایی

  @IsEnum(OrientationEnum)
  orientation: OrientationEnum;

  //زیر بنا و مساحت کل
  @IsNumber() @Type(() => Number) builtArea: number;
  @IsNumber() @Type(() => Number) landArea: number;

  //سال ساخت

  @IsNumber()
  @Type(() => Number)
  builtYear: number;

  // مجموع طبقات و طبقه خانه
  @IsNumber() @Type(() => Number) totalFloors: number;
  @IsNumber() @Type(() => Number) floorNumber: number;

  //خواب
  @IsNumber() @Type(() => Number) rooms: number;

  // رهن اجاره
  @IsNumber() @Type(() => Number) rent: number;
  @IsNumber() @Type(() => Number) deposit: number;

  @IsOptional()
  images?: any;

  @IsOptional()
  @IsArray()
  @Transform(({ value }) => {
    if (Array.isArray(value)) return value;

    // اگر JSON بود → ["x","y","z"]
    try {
      const parsed = JSON.parse(value);
      if (Array.isArray(parsed)) return parsed;
    } catch {}

    // اگر "x,y,z" بود
    if (typeof value === 'string') {
      return value.split(',').map((item) => item.trim());
    }

    return [];
  })
  amenities?: string[];
}
