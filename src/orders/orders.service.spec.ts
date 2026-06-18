import { OrdersService } from './orders.service';

describe('OrdersService', () => {
  it('seeds one order and creates more', () => {
    const service = new OrdersService();
    expect(service.findAll()).toHaveLength(1);
    const created = service.create({
      productId: 2,
      quantity: 1,
      status: 'shipped',
    });
    expect(service.findOne(created.id).status).toBe('shipped');
  });
});
