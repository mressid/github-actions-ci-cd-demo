import { Injectable } from '@nestjs/common';
import { InMemoryStore } from '../common/in-memory-store';

export interface Order {
  id: number;
  productId: number;
  quantity: number;
  status: 'pending' | 'shipped' | 'delivered';
}

@Injectable()
export class OrdersService extends InMemoryStore<Order> {
  constructor() {
    super('Order', [{ id: 1, productId: 1, quantity: 2, status: 'pending' }]);
  }
}
