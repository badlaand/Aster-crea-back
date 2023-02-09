import { Module } from '@nestjs/common';
import { ProductsByOrderService } from './products-by-order.service';
import { ProductsByOrderController } from './products-by-order.controller';
import { ProductsByOrder } from './entities/products-by-order.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ProductsByOrder])],
  controllers: [ProductsByOrderController],
  providers: [ProductsByOrderService]
})
export class ProductsByOrderModule { }
