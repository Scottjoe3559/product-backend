import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Observable } from 'rxjs';
import { DeleteResult, UpdateResult } from 'typeorm';
import { ProductPost } from '../models/post.interface';
import { ProductService } from '../services/product.service';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Post()
  create(@Body() productPost : ProductPost): Observable<ProductPost> {
    return this.productService.createPost(productPost)
  }

  @Get()
  findAll(): Observable<ProductPost[]> {
    return this.productService.findAllPosts();
  }

  @Put('update/:id')
  update(
    @Param('id') id: number,
    @Body() productPost: ProductPost,
  ): Observable<UpdateResult> {
    return this.productService.updatePost(id, productPost)
  }

  @Delete('delete/:id')
  delete( @Param('id') id: number): Observable<DeleteResult> {
    return this.productService.deletePost(id)
  }
}
