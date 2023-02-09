import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { RoleEnumType } from "../entities/user.entity";

export class UpdateUserDto extends PartialType(CreateUserDto) {
    pseudo: string;
    mail: string;
    password: string;
    adress: string;
    postalCode: string;
    city: string;
    country: string;
    role: RoleEnumType;
}
