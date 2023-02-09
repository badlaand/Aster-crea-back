import { IsInt, IsNumber, Min } from "class-validator";


export class CreateGiftcardsByOrderDto {
    @IsNumber()
    @IsInt()
    @Min(0)
    quantity: number
}
