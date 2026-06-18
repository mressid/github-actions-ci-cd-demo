import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './products/products.controller';
import { ProductsService } from './products/products.service';
import { CategoriesController } from './categories/categories.controller';
import { CategoriesService } from './categories/categories.service';
import { TagsController } from './tags/tags.controller';
import { TagsService } from './tags/tags.service';
import { OrdersController } from './orders/orders.controller';
import { OrdersService } from './orders/orders.service';
import { TagsControllerV2 } from './tags-v2/tags.controller';
import { TagsServiceV2 } from './tags-v2/tags.service';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true })],
  controllers: [
    AppController,
    ProductsController,
    CategoriesController,
    TagsController,
    OrdersController,
    TagsControllerV2,
  ],
  providers: [
    TagsServiceV2,
    AppService,
    ProductsService,
    CategoriesService,
    TagsService,
    OrdersService,
  ],
})
export class AppModule {}
