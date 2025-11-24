import { Module } from '@nestjs/common';
import { LiaraStorageService } from './liara-storage.service';

@Module({
  providers: [LiaraStorageService],
  exports: [LiaraStorageService],
})
export class LiaraStorageModule {}
