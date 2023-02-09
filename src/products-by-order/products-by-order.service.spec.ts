import { Test, TestingModule } from '@nestjs/testing';
import { ProductsByOrderService } from './products-by-order.service';

describe('ProductsByOrderService', () => {
  let service: ProductsByOrderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductsByOrderService],
    }).compile();

    service = module.get<ProductsByOrderService>(ProductsByOrderService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
