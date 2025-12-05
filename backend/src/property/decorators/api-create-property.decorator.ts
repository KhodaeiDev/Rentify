import { applyDecorators } from '@nestjs/common';
import {
  ApiBody,
  ApiConsumes,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiResponse,
} from '@nestjs/swagger';
import { PropertyEnum } from '../enums/property-enum';
import { UnitType } from '../enums/unitType-enum';
import { OrientationEnum } from '../enums/orientation-enum';

export function ApiCreateProperty() {
  return applyDecorators(
    ApiConsumes('multipart/form-data'),
    ApiBody({
      schema: {
        type: 'object',
        properties: {
          images: {
            type: 'array',
            nullable: true,
            items: { type: 'string', format: 'binary' },
          },

          title: { type: 'string' },
          description: { type: 'string', nullable: true },

          type: { type: 'string', enum: Object.values(PropertyEnum) },
          unitType: { type: 'string', enum: Object.values(UnitType) },

          city: { type: 'string' },
          area: { type: 'string' },
          address: { type: 'string' },

          lat: { type: 'number', nullable: true },
          lng: { type: 'number', nullable: true },

          orientation: {
            type: 'string',
            enum: Object.values(OrientationEnum),
          },

          builtArea: { type: 'number' },
          landArea: { type: 'number' },

          builtYear: { type: 'number' },
          totalFloors: { type: 'number' },
          floorNumber: { type: 'number' },

          rooms: { type: 'number' },

          rent: { type: 'number' },
          deposit: { type: 'number' },

          amenities: {
            type: 'array',
            nullable: true,
            items: { type: 'string' },
          },
        },
        required: [
          'title',
          'type',
          'unitType',
          'city',
          'area',
          'address',
          'orientation',
          'builtArea',
          'landArea',
          'builtYear',
          'totalFloors',
          'floorNumber',
          'rooms',
          'rent',
          'deposit',
        ],
      },
    }),

    ApiCreatedResponse({
      description: 'ملک با موفقیت ایجاد شد',
    }),
    ApiNotFoundResponse({
      description: 'کاربر شناسایی نشد!',
    }),
  );
}
