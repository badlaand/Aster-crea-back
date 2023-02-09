import { RoleEnumType } from "src/user/entities/user.entity";


// Ici la class et propriétés nécessaire à la connexion du compte utilisateur ou admin
export class LoginDto {

    mail: string;
    password: string;
    role: RoleEnumType;
}
