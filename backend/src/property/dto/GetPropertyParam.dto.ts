import { BadRequestException } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsNumber } from 'class-validator';

export class GetPropertyParamDto {
  @ApiProperty({
    type: Number,
    description: 'کد یکتای 4 رقمی آگهی',
    example: 9507,
  })
  @Transform(({ value }) => {
    let num = Number(value);

    if (isNaN(num)) throw new BadRequestException('کد آگهی نامعتبر است.');
    return num;
  })
  @IsNumber()
  code: number;
}
