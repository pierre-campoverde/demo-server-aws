import { Injectable } from '@nestjs/common';
import { Order } from './order.interface';

@Injectable()
export class OrderService {
  private readonly orders: Array<Order> = [];
  getOrders(): Order[] {
    return this.orders;
  }
  makeOrder(order: Order) {
    this.orders.push(order);
  }
}
