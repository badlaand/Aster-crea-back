import { RoleEnumType } from "src/user/entities/user.entity";

export class CreateAuthDto {
    pseudo: string;
    mail: string;
    password: string;
    adress: string;
    postalCode: number;
    city: string;
    country: string;
    role: RoleEnumType;
}
