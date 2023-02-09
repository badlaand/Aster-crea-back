import { PartialType } from '@nestjs/mapped-types';
import { IsInt, IsNumber, Min } from 'class-validator';
import { CreateGiftcardsByOrderDto } from './create-giftcards-by-order.dto';

export class UpdateGiftcardsByOrderDto extends PartialType(CreateGiftcardsByOrderDto) {
    @IsNumber()
    @IsInt()
    @Min(0)
    quantity: number
}
