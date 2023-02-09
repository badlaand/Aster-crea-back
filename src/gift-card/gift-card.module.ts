import { Module } from '@nestjs/common';
import { GiftCardService } from './gift-card.service';
import { GiftCardController } from './gift-card.controller';
import { GiftCard } from './entities/gift-card.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([GiftCard])],
  controllers: [GiftCardController],
  providers: [GiftCardService]
})
export class GiftCardModule { }
