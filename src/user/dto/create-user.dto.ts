import { RoleEnumType } from "../entities/user.entity";
export class CreateUserDto {
    pseudo: string;
    mail: string;
    password: string;
    adress: string;
    postalCode: string;
    city: string;
    country: string;
    role: RoleEnumType;
}
