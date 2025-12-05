import { applyDecorators } from '@nestjs/common';
import {
  ApiBody,
  ApiConsumes,
  ApiResponse,
  ApiParam,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { PropertyEnum } from '../enums/property-enum';
import { UnitType } from '../enums/unitType-enum';
import { OrientationEnum } from '../enums/orientation-enum';

export function ApiUpdateProperty() {
  return applyDecorators(
    ApiBearerAuth(),
    ApiConsumes('multipart/form-data'),

    ApiParam({
      name: 'id',
      type: Number,
      description: 'شناسه یکتای آگهی',
      required: true,
      example: 123,
    }),

    ApiBody({
      schema: {
        type: 'object',
        properties: {
          images: {
            type: 'array',
            items: { type: 'string', format: 'binary' },
          },

          title: { type: 'string' },
          description: { type: 'string' },

          type: { type: 'string', enum: Object.values(PropertyEnum) },
          unitType: { type: 'string', enum: Object.values(UnitType) },

          city: { type: 'string' },
          area: { type: 'string' },
          address: { type: 'string' },

          lat: { type: 'number' },
          lng: { type: 'number' },

          orientation: { type: 'string', enum: Object.values(OrientationEnum) },

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
            items: { type: 'string' },
          },
        },
        required: [], // چون PATCH است، هیچ فیلدی اجباری نیست
      },
    }),

    ApiResponse({
      status: 200,
      description: 'آگهی با موفقیت ویرایش شد و در انتظار تایید است',
    }),
    ApiResponse({
      status: 400,
      description: 'شناسه آگهی نامعتبر است یا ورودی اشتباه است',
    }),
    ApiResponse({
      status: 403,
      description: 'شما اجازه ویرایش این آگهی را ندارید',
    }),
    ApiResponse({
      status: 404,
      description: 'آگهی پیدا نشد',
    }),
  );
}
