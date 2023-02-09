import { IsInt, Min } from "class-validator";

export class CreateProductsByOrderDto {
    @IsInt()
    @Min(0)
    quantity: number
}
