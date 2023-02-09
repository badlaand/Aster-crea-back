import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductsByOrderService } from './products-by-order.service';
import { CreateProductsByOrderDto } from './dto/create-products-by-order.dto';
import { UpdateProductsByOrderDto } from './dto/update-products-by-order.dto';

@Controller('products-by-order')
export class ProductsByOrderController {
  constructor(private readonly productsByOrderService: ProductsByOrderService) { }

  @Post()
  create(@Body() createProductsByOrderDto: CreateProductsByOrderDto) {
    return this.productsByOrderService.create(createProductsByOrderDto);
  }

  @Get()
  findAll() {
    return this.productsByOrderService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productsByOrderService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductsByOrderDto: UpdateProductsByOrderDto) {
    return this.productsByOrderService.update(id, updateProductsByOrderDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productsByOrderService.remove(id);
  }
}
