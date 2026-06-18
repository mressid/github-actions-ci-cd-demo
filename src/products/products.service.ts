import { Injectable } from '@nestjs/common';
import { InMemoryStore } from '../common/in-memory-store';

export interface Product {
  id: number;
  name: string;
  price: number;
  categoryId?: number;
}

@Injectable()
export class ProductsService extends InMemoryStore<Product> {
  constructor() {
    super('Product', [
      { id: 1, name: 'Coffee Mug', price: 12.5, categoryId: 1 },
      { id: 2, name: 'T-Shirt', price: 19.99, categoryId: 2 },
    ]);
  }
}
