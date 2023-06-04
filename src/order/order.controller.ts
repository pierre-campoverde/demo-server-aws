import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { Order } from './order.interface';
import { OrderService } from './order.service';

@Controller('order')
export class OrderController {
  constructor(private orderService: OrderService) {}
  @Get()
  async getOrders(): Promise<Order[]> {
    return this.orderService.getOrders();
  }

  @Post()
  async makeOrder(@Body() createOrderDto: CreateOrderDto) {
    this.orderService.makeOrder(createOrderDto);
  }
}
