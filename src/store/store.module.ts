import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { StoreService } from './services/store.service';
import { StoreController } from './controllers/store.controller';
import { StorePostEntity } from './models/post.entity';
import { ProductPostEntity } from 'src/product/models/post.entity';

@Module({
  imports: [TypeOrmModule.forFeature([StorePostEntity]), TypeOrmModule.forFeature([ProductPostEntity])],
  providers: [StoreService],
  controllers: [StoreController]
})
export class StoreModule {}
