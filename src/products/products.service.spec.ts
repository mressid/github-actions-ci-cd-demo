import { NotFoundException } from '@nestjs/common';
import { ProductsService } from './products.service';

describe('ProductsService', () => {
  let service: ProductsService;

  beforeEach(() => {
    service = new ProductsService();
  });

  it('lists seeded products', () => {
    expect(service.findAll()).toHaveLength(2);
  });

  it('creates and finds a product', () => {
    const created = service.create({ name: 'Hat', price: 9 });
    expect(service.findOne(created.id)).toEqual(created);
  });

  it('removes a product', () => {
    service.remove(1);
    expect(() => service.findOne(1)).toThrow(NotFoundException);
  });
});
