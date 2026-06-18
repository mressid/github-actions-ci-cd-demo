import { NotFoundException } from '@nestjs/common';
import { InMemoryStore } from './in-memory-store';

interface Thing {
  id: number;
  name: string;
}

describe('InMemoryStore', () => {
  let store: InMemoryStore<Thing>;

  beforeEach(() => {
    store = new InMemoryStore<Thing>('Thing', [{ id: 1, name: 'seed' }]);
  });

  it('returns seeded items', () => {
    expect(store.findAll()).toEqual([{ id: 1, name: 'seed' }]);
  });

  it('finds an item by id', () => {
    expect(store.findOne(1).name).toBe('seed');
  });

  it('throws NotFound for a missing id', () => {
    expect(() => store.findOne(999)).toThrow(NotFoundException);
  });

  it('creates with an auto-incremented id past the seed max', () => {
    const created = store.create({ name: 'fresh' });
    expect(created.id).toBe(2);
    expect(store.findAll()).toHaveLength(2);
  });

  it('keeps ids unique after removals', () => {
    const a = store.create({ name: 'a' });
    store.remove(a.id);
    const b = store.create({ name: 'b' });
    expect(b.id).not.toBe(a.id);
  });

  it('removes an item', () => {
    store.remove(1);
    expect(store.findAll()).toHaveLength(0);
    expect(() => store.remove(1)).toThrow(NotFoundException);
  });

  it('starts ids at 1 when seeded empty', () => {
    expect(new InMemoryStore<Thing>('Thing').create({ name: 'x' }).id).toBe(1);
  });
});
