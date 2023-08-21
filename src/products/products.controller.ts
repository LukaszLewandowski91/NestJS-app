import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDTO } from './dtos/create-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private productService: ProductsService) {}

  @Get('/')
  getAll(): any {
    return this.productService.getAll();
  }

  @Get('/:id')
  getById(@Param('id') id: string) {
    return this.productService.getById(id);
  }

  @Delete('/:id')
  deleteById(@Param('id') id: string) {
    this.productService.deleteById(id);
    return { success: true };
  }

  @Post('/')
  create(@Body() productData: CreateProductDTO) {
    return this.productService.create(productData);
    return { success: true };
  }
}
