import { Test, TestingModule } from '@nestjs/testing';
import { GiftcardsByOrderController } from './giftcards-by-order.controller';
import { GiftcardsByOrderService } from './giftcards-by-order.service';

describe('GiftcardsByOrderController', () => {
  let controller: GiftcardsByOrderController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GiftcardsByOrderController],
      providers: [GiftcardsByOrderService],
    }).compile();

    controller = module.get<GiftcardsByOrderController>(GiftcardsByOrderController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
