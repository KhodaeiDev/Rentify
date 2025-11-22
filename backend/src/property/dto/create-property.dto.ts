// src/properties/dto/create-property.dto.ts
import {
  IsString,
  IsOptional,
  IsEnum,
  IsNumber,
  IsArray,
  ArrayNotEmpty,
  IsNotEmpty,
} from 'class-validator';
import { PropertyEnum } from '../enums/property-enum';
import { UnitType } from '../enums/unitType-enum';
import { OrientationEnum } from '../enums/orientation-enum';

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
  @IsOptional() @IsNumber() lat?: number;
  @IsOptional() @IsNumber() lng?: number;

  //موقعیت جغرافیایی

  @IsEnum(OrientationEnum)
  orientation: OrientationEnum;

  //زیر بنا و مساحت کل
  @IsNumber() builtArea: number;
  @IsNumber() landArea: number;

  //سال ساخت

  @IsNumber()
  builtYear: number;

  // مجموع طبقات و طبقه خانه
  @IsNumber() totalFloors: number;
  @IsNumber() floorNumber: number;

  //خواب
  @IsNumber() rooms: number;

  // رهن اجاره
  @IsNumber() rent: number;
  @IsNumber() deposit: number;

  //  تصاویر
  @IsNotEmpty()
  @IsArray()
  images: string[];

  @IsOptional() @IsArray() amenities?: string[];
}
