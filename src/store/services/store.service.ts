import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { ProductPostEntity } from 'src/product/models/post.entity';
import { ProductPost } from 'src/product/models/post.interface';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';

import { StorePostEntity } from '../models/post.entity';
import { StorePost } from '../models/post.interface';

@Injectable()
export class StoreService {
  constructor(
    @InjectRepository(StorePostEntity)
    private readonly storePostRepository: Repository<StorePostEntity>,
    @InjectRepository(ProductPostEntity)
    private readonly productPostRepository: Repository<ProductPostEntity>
  ) {}

  createPost(storePost: StorePost): Observable<StorePost> {
    return from(this.storePostRepository.save(storePost));
  }

  findAllPosts(): Observable<StorePost[]>{
    return from(this.storePostRepository.find())
  }
  
  getPostById(id: number): Observable<ProductPost[]> {
    return from(this.productPostRepository.find({shop: id}))
  }

  updatePost(id: number, storePost: StorePost): Observable<UpdateResult>{
    return from(this.storePostRepository.update(id, storePost));
  }

  deletePost(id: number): Observable<DeleteResult> {
    return from(this.storePostRepository.delete(id))
  }
}
