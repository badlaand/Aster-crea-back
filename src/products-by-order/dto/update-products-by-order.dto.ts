import { PartialType } from '@nestjs/mapped-types';
import { IsInt, Min } from 'class-validator';
import { CreateProductsByOrderDto } from './create-products-by-order.dto';

export class UpdateProductsByOrderDto extends PartialType(CreateProductsByOrderDto) {
    @IsInt()
    @Min(0)
    quantity: number
}
