import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Observable } from 'rxjs';
import { DeleteResult, UpdateResult } from 'typeorm';
import { StorePost } from '../models/post.interface';
import { StoreService } from '../services/store.service';

@Controller('store')
export class StoreController {
  constructor(private storeService: StoreService) {}

  @Post()
  create(@Body() storePost : StorePost): Observable<StorePost> {
    return this.storeService.createPost(storePost)
  }

  @Get()
  findAll(): Observable<StorePost[]> {
    return this.storeService.findAllPosts();
  }

  @Get(':id/product')
  getPostById(@Param('id') id: string) {
    return this.storeService.getPostById(Number(id));
  }

  @Put('update/:id')
  update(
    @Param('id') id: number,
    @Body() storePost: StorePost,
  ): Observable<UpdateResult> {
    return this.storeService.updatePost(id, storePost)
  }

  @Delete('delete/:id')
  delete( @Param('id') id: number): Observable<DeleteResult> {
    return this.storeService.deletePost(id)
  }
}
