import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';

import { ReservationPostEntity } from '../models/post.entity';
import { ReservationPost } from '../models/post.interface';

@Injectable()
export class ReservationService {
  constructor(
    @InjectRepository(ReservationPostEntity)
    private readonly productPostRepository: Repository<ReservationPostEntity>
  ) {}

  createPost(ReservationPost: ReservationPost): Observable<ReservationPost> {
    return from(this.productPostRepository.save(ReservationPost));
  }

  findAllPosts(): Observable<ReservationPost[]>{
    return from(this.productPostRepository.find())
  }
  
  updatePost(id: number, ReservationPost: ReservationPost): Observable<UpdateResult>{
    return from(this.productPostRepository.update(id, ReservationPost));
  }
  
  deletePost(id: number): Observable<DeleteResult> {
    return from(this.productPostRepository.delete(id))
  }
}
