import { Controller, Get, Param } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { ParseUUIDPipe, NotFoundException } from '@nestjs/common';

@Controller('orders')
export class OrdersController {
  constructor(private orderService: OrdersService) {}

  @Get('/')
  getAll(): any {
    return this.orderService.getAll();
  }

  @Get('/:id')
  getById(@Param('id', new ParseUUIDPipe()) id: string) {
    if (!this.orderService.getById(id))
      throw new NotFoundException('Product not found');
    return this.orderService.getById(id);
  }
}
