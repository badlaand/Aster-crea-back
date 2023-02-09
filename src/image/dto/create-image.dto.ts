import { IsNotEmpty } from "class-validator/types/decorator/decorators";

export class CreateImageDto {
    description: string;
    @IsNotEmpty()
    picture: string
}
