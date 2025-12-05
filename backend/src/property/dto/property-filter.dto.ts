// src/properties/dto/property-filter.dto.ts
import {
  IsOptional,
  IsString,
  IsNumber,
  IsArray,
  IsEnum,
} from 'class-validator';
import { PropertyEnum } from '../enums/property-enum';
import { Transform } from 'class-transformer';

export class PropertyFilterDto {
  @IsEnum(PropertyEnum) @IsOptional() @IsString() type?: PropertyEnum;

  @IsOptional() @IsString() city?: string;
  @IsOptional() @IsString() area?: string;

  @Transform(({ value }) => {
    return Number(value);
  })
  @IsNumber()
  @IsOptional()
  minDeposit?: number;

  @Transform(({ value }) => {
    return Number(value);
  })
  @IsNumber()
  @IsOptional()
  maxDeposit?: number;

  @Transform(({ value }) => {
    return Number(value);
  })
  @IsNumber()
  @IsOptional()
  minRent?: number;

  @Transform(({ value }) => {
    return Number(value);
  })
  @IsNumber()
  @IsOptional()
  maxRent?: number;

  @Transform(({ value }) => {
    return Number(value);
  })
  @IsNumber()
  @IsOptional()
  minArea?: number;

  @Transform(({ value }) => {
    return Number(value);
  })
  @IsNumber()
  @IsOptional()
  maxArea?: number;

  @Transform(({ value }) => {
    return Number(value);
  })
  @IsNumber()
  @IsOptional()
  rooms?: number;

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
  amenities?: string[]; // مثل ['pool','gym']

  @Transform(({ value }) => {
    return Number(value);
  })
  @IsNumber()
  @IsOptional()
  page?: number;

  @Transform(({ value }) => {
    return Number(value);
  })
  @IsNumber()
  @IsOptional()
  limit?: number;

  @IsOptional() sort?: 'newest' | 'price_asc' | 'price_desc';
}
