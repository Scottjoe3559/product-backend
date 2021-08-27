import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Observable } from 'rxjs';
import { DeleteResult, UpdateResult } from 'typeorm';
import { ReservationPost } from '../models/post.interface';
import { ReservationService } from '../services/reservation.service';

@Controller('reservation')
export class ReservationController {
  constructor(private ReservationService: ReservationService) {}

  @Post()
  create(@Body() ReservationPost : ReservationPost): Observable<ReservationPost> {
    return this.ReservationService.createPost(ReservationPost)
  }

  @Get()
  findAll(): Observable<ReservationPost[]> {
    return this.ReservationService.findAllPosts();
  }

  @Put('update/:id')
  update(
    @Param('id') id: number,
    @Body() ReservationPost: ReservationPost,
  ): Observable<UpdateResult> {
    return this.ReservationService.updatePost(id, ReservationPost)
  }

  @Delete('delete/:id')
  delete( @Param('id') id: number): Observable<DeleteResult> {
    return this.ReservationService.deletePost(id)
  }
}
