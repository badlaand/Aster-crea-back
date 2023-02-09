import { Test, TestingModule } from '@nestjs/testing';
import { GiftcardsByOrderService } from './giftcards-by-order.service';

describe('GiftcardsByOrderService', () => {
  let service: GiftcardsByOrderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GiftcardsByOrderService],
    }).compile();

    service = module.get<GiftcardsByOrderService>(GiftcardsByOrderService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
