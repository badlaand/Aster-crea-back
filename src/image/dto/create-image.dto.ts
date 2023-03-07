import { IsNotEmpty } from "class-validator";

export class CreateImageDto {
    description: string;
    // @IsNotEmpty()
    picture: string
}
