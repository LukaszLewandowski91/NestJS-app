import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDTO } from './dtos/create-product.dto';
import { ParseUUIDPipe } from '@nestjs/common';
import { UpdateProductDTO } from './dtos/update-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private productService: ProductsService) {}

  @Get('/')
  getAll(): any {
    return this.productService.getAll();
  }

  @Get('/:id')
  getById(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.productService.getById(id);
  }

  @Delete('/:id')
  deleteById(@Param('id', new ParseUUIDPipe()) id: string) {
    this.productService.deleteById(id);
    return { success: true };
  }

  @Post('/')
  create(@Body() productData: CreateProductDTO) {
    return this.productService.create(productData);
  }

  @Put('/:id')
  edit(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() productData: UpdateProductDTO,
  ) {
    return this.productService.updateById(id, productData);
  }
}
