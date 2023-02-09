import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsString, IsBoolean, IsNumber, Min } from 'class-validator';
import { CreateProductDto } from './create-product.dto';

export class UpdateProductDto extends PartialType(CreateProductDto) {
    @IsNotEmpty()
    @IsString()
    title: string;
    @IsNotEmpty()
    @IsString()
    category: string;
    @IsNotEmpty()
    @IsString()
    picture: string;
    @IsBoolean()
    @IsNotEmpty()
    customable: boolean;
    @IsNumber()
    @Min(5)
    price: number;
    description: string
}
