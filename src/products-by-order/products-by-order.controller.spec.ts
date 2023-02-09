import { Test, TestingModule } from '@nestjs/testing';
import { ProductsByOrderController } from './products-by-order.controller';
import { ProductsByOrderService } from './products-by-order.service';

describe('ProductsByOrderController', () => {
  let controller: ProductsByOrderController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductsByOrderController],
      providers: [ProductsByOrderService],
    }).compile();

    controller = module.get<ProductsByOrderController>(ProductsByOrderController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
