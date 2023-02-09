import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { GiftCardService } from './gift-card.service';
import { CreateGiftCardDto } from './dto/create-gift-card.dto';
import { UpdateGiftCardDto } from './dto/update-gift-card.dto';
import { GiftCard } from './entities/gift-card.entity';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/get-user.decorator';
import { User } from 'src/user/entities/user.entity';
// import { AuthGuard } from '@nestjs/passport';

@Controller('gift-card')
// @UseGuards(AuthGuard())
export class GiftCardController {
  constructor(private readonly giftCardService: GiftCardService) { }

  @Post()

  create(
    @Body() createGiftCardDto: CreateGiftCardDto,
    @GetUser() user: User,
  ): Promise<GiftCard | string> {
    return this.giftCardService.create(createGiftCardDto);
  }

  @Get()
  findAll() {
    return this.giftCardService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string, giftcard): Promise<GiftCard> {
    return this.giftCardService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGiftCardDto: UpdateGiftCardDto) {
    return this.giftCardService.update(+id, updateGiftCardDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.giftCardService.remove(id);
  }
}
