import { Injectable } from '@nestjs/common';
import { InMemoryStore } from '../common/in-memory-store';

export interface Tag {
  id: number;
  name: string;
}

@Injectable()
export class TagsService extends InMemoryStore<Tag> {
  constructor() {
    super('Tag', [
      { id: 1, name: 'new' },
      { id: 2, name: 'sale' },
    ]);
  }
}
