import { TagsService } from './tags.service';

describe('TagsService', () => {
  it('seeds two tags and creates more', () => {
    const service = new TagsService();
    expect(service.findAll()).toHaveLength(2);
    const created = service.create({ name: 'clearance' });
    expect(service.findOne(created.id).name).toBe('clearance');
  });
});
