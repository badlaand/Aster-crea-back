import { IsBoolean, IsNotEmpty, IsNumber, IsString, Min } from "class-validator";


export class CreateProductDto {
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
