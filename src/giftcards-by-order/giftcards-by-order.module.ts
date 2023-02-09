import { Module } from '@nestjs/common';
import { GiftcardsByOrderService } from './giftcards-by-order.service';
import { GiftcardsByOrderController } from './giftcards-by-order.controller';
import { GiftcardsByOrder } from './entities/giftcards-by-order.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([GiftcardsByOrder])],
  controllers: [GiftcardsByOrderController],
  providers: [GiftcardsByOrderService]
})
export class GiftcardsByOrderModule { }
