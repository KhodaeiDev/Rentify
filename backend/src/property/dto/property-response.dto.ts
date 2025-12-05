import { ApiProperty } from '@nestjs/swagger';
import { PropertyEnum } from '../enums/property-enum';
import { UnitType } from '../enums/unitType-enum';
import { OrientationEnum } from '../enums/orientation-enum';

export class PropertyImageDto {
  url: string;
  key: string;
}

export class PropertyResponseDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  title: string;

  @ApiProperty({ required: false })
  description?: string;

  @ApiProperty({ enum: PropertyEnum })
  type: PropertyEnum;

  @ApiProperty({ enum: UnitType })
  unitType: UnitType;

  @ApiProperty()
  city: string;

  @ApiProperty()
  area: string;

  @ApiProperty()
  address: string;

  @ApiProperty({
    type: [PropertyImageDto],
    required: true,
  })
  images?: PropertyImageDto[];

  @ApiProperty({ required: false })
  lat?: number;

  @ApiProperty({ required: false })
  lng?: number;

  @ApiProperty({ enum: OrientationEnum })
  orientation: OrientationEnum;

  @ApiProperty()
  builtArea: number;

  @ApiProperty()
  landArea: number;

  @ApiProperty()
  builtYear: number;

  @ApiProperty()
  totalFloors: number;

  @ApiProperty()
  floorNumber: number;

  @ApiProperty()
  rooms: number;

  @ApiProperty()
  rent: number;

  @ApiProperty()
  deposit: number;

  @ApiProperty({ type: [String], required: false })
  amenities?: string[];
}
