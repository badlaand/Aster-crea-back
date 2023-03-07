import { IsEmail, IsNotEmpty, IsString } from "class-validator";
import { RoleEnumType } from "src/user/entities/user.entity";


// Ici la class et propriétés nécessaire à la connexion du compte utilisateur ou admin
export class LoginDto {
    // @IsEmail()
    // @IsString()
    // @IsNotEmpty()
    mail: string;
    // @IsString()
    // @IsNotEmpty()
    password: string;
    role: RoleEnumType;
}
