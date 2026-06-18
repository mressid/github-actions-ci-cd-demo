import { NotFoundException } from '@nestjs/common';

// ponytail: shared in-memory CRUD so each entity is ~3 lines, not a copy.
// Swap this for a real repository/DB when the demo needs persistence.
export class InMemoryStore<T extends { id: number }> {
  private items: T[];
  private nextId: number;

  constructor(
    private readonly label: string,
    seed: T[] = [],
  ) {
    this.items = [...seed];
    this.nextId = seed.reduce((max, i) => Math.max(max, i.id), 0) + 1;
  }

  findAll(): T[] {
    return this.items;
  }

  findOne(id: number): T {
    const item = this.items.find((i) => i.id === id);
    if (!item) throw new NotFoundException(`${this.label} ${id} not found`);
    return item;
  }

  create(data: Omit<T, 'id'>): T {
    const item = { id: this.nextId++, ...data } as T;
    this.items.push(item);
    return item;
  }

  remove(id: number): void {
    const item = this.findOne(id);
    this.items = this.items.filter((i) => i.id !== item.id);
  }
}
