import { PartialType } from '@nestjs/mapped-types';
import { IsEmail, IsInt, IsNotEmpty, IsString } from 'class-validator';
import { CreatePurchaseDto } from './create-purchase.dto';

export class UpdatePurchaseDto extends PartialType(CreatePurchaseDto) {
    purchaseNumber: string;
    endDate: string;
    @IsString()
    status: string
    @IsEmail()
    @IsNotEmpty()
    email: string;
    @IsNotEmpty()
    @IsString()
    adress: string;
    @IsNotEmpty()
    @IsString()
    city: string;
    @IsNotEmpty()
    @IsString()
    country: string;
    @IsNotEmpty()
    @IsInt()
    postalCode: number

}
