import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ReservationService } from './services/reservation.service';
import { ReservationController } from './controllers/reservation.controller';
import { ReservationPostEntity } from './models/post.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ReservationPostEntity])],
  providers: [ReservationService],
  controllers: [ReservationController]
})
export class ReservationModule {}
