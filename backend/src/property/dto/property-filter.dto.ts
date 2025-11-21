// src/properties/dto/property-filter.dto.ts
import {
  IsOptional,
  IsString,
  IsNumber,
  IsArray,
  IsEnum,
} from 'class-validator';
import { PropertyEnum } from '../enums/property-enum';

export class PropertyFilterDto {
  @IsEnum(PropertyEnum) @IsOptional() @IsString() propertyType?: PropertyEnum;

  @IsOptional() @IsString() city?: string;
  @IsOptional() @IsString() area?: string;

  @IsOptional() minDeposit?: number;
  @IsOptional() maxDeposit?: number;

  @IsOptional() minRent?: number;
  @IsOptional() maxRent?: number;

  @IsOptional() minArea?: number;
  @IsOptional() maxArea?: number;

  @IsOptional() rooms?: number;

  @IsOptional() @IsArray() amenities?: string[]; // مثل ['pool','gym']

  @IsOptional() page?: number;
  @IsOptional() limit?: number;
  @IsOptional() sort?: 'newest' | 'price_asc' | 'price_desc';
}
