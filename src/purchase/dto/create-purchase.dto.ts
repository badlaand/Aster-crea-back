import { IsEmail, IsInt, IsNotEmpty, IsString } from "class-validator";
import { User } from "src/user/entities/user.entity";

export class CreatePurchaseDto {
    // purchaseNumber: string;
    // status: string
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
