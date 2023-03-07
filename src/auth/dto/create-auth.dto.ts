import { IsEmail, IsNotEmpty, IsNumber, IsString, Min } from "class-validator";
import { RoleEnumType } from "src/user/entities/user.entity";

export class CreateAuthDto {
    // @IsString()
    // @IsNotEmpty()
    pseudo: string;
    // @IsNotEmpty()
    // @IsEmail()
    mail: string;
    // @Min(6)
    // @IsString()
    password: string;
    // @IsString()
    adress: string;
    // @IsNumber()
    postalCode: number;
    // @IsString()
    city: string;
    // @IsString()
    country: string;
    role: RoleEnumType;
}
