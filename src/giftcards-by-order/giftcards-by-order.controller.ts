import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GiftcardsByOrderService } from './giftcards-by-order.service';
import { CreateGiftcardsByOrderDto } from './dto/create-giftcards-by-order.dto';
import { UpdateGiftcardsByOrderDto } from './dto/update-giftcards-by-order.dto';
import { GiftcardsByOrder } from './entities/giftcards-by-order.entity';

@Controller('giftcards-by-order')
export class GiftcardsByOrderController {
  constructor(private readonly giftcardsByOrderService: GiftcardsByOrderService) { }

  @Post()
  create(@Body() createGiftcardsByOrderDto: CreateGiftcardsByOrderDto): Promise<GiftcardsByOrder> {
    return this.giftcardsByOrderService.create(createGiftcardsByOrderDto);
  }

  @Get()
  findAll(): Promise<GiftcardsByOrder[] | string> {
    return this.giftcardsByOrderService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.giftcardsByOrderService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGiftcardsByOrderDto: UpdateGiftcardsByOrderDto) {
    return this.giftcardsByOrderService.update(+id, updateGiftcardsByOrderDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.giftcardsByOrderService.remove(id);
  }
}
