import { Controller, Delete, Get, Param } from '@nestjs/common';
import { ProductsService } from './products.service';

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
}
