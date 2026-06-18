import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { TagsServiceV2 } from './tags.service';

@ApiTags('tags-v2')
@Controller('tags-v2')
export class TagsControllerV2 {
  constructor(private readonly tags: TagsServiceV2) {}

  @Get()
  findAll() {
    return this.tags.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.tags.findOne(id);
  }

  @Post()
  create(@Body() body: { name: string }) {
    return this.tags.create(body);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    this.tags.remove(id);
    return { deleted: true };
  }
}
