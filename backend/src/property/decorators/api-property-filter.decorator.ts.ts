import { applyDecorators } from '@nestjs/common';
import { ApiQuery } from '@nestjs/swagger';
import { PropertyEnum } from '../enums/property-enum';

export function ApiPropertyFilter() {
  return applyDecorators(
    ApiQuery({ name: 'type', required: false, enum: PropertyEnum }),
    ApiQuery({ name: 'city', required: false }),
    ApiQuery({ name: 'area', required: false }),

    ApiQuery({ name: 'minDeposit', required: false, type: Number }),
    ApiQuery({ name: 'maxDeposit', required: false, type: Number }),

    ApiQuery({ name: 'minRent', required: false, type: Number }),
    ApiQuery({ name: 'maxRent', required: false, type: Number }),

    ApiQuery({ name: 'minArea', required: false, type: Number }),
    ApiQuery({ name: 'maxArea', required: false, type: Number }),

    ApiQuery({ name: 'rooms', required: false, type: Number }),

    // ارسال آرایه: amenities=gym,pool
    ApiQuery({
      name: 'amenities',
      required: false,
      isArray: true,
      type: Array,
    }),

    ApiQuery({ name: 'page', required: false, type: Number }),
    ApiQuery({ name: 'limit', required: false, type: Number }),
    ApiQuery({
      name: 'sort',
      required: false,
      enum: ['newest', 'price_asc', 'price_desc'],
    }),
  );
}
