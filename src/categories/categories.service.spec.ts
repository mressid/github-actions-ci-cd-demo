import { CategoriesService } from './categories.service';

describe('CategoriesService', () => {
  it('seeds two categories and creates more', () => {
    const service = new CategoriesService();
    expect(service.findAll()).toHaveLength(2);
    const created = service.create({ name: 'Books' });
    expect(service.findOne(created.id).name).toBe('Books');
  });
});
