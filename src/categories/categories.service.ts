import { Injectable } from '@nestjs/common';
import { InMemoryStore } from '../common/in-memory-store';

export interface Category {
  id: number;
  name: string;
}

@Injectable()
export class CategoriesService extends InMemoryStore<Category> {
  constructor() {
    super('Category', [
      { id: 1, name: 'Kitchen' },
      { id: 2, name: 'Apparel' },
    ]);
  }
}
