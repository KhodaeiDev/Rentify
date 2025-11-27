import { Module } from '@nestjs/common';
import { PropertyService } from './property.service';
import { PropertyController } from './property.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Property } from './entities/property.entity';
import { UsersModule } from 'src/users/users.module';
import { LiaraStorageModule } from 'src/liara-storage/liara-storage.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Property]),
    UsersModule,
    LiaraStorageModule,
  ],
  controllers: [PropertyController],
  providers: [PropertyService],
})
export class PropertyModule {}
