import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
export enum RoleEnumType {
    USER = 'user',
    ADMIN = 'admin',
}
@Entity()
export class User {
    //Je génére la clé primaire
    @PrimaryGeneratedColumn('uuid')
    id?: string;

    //Je crée les colonnes
    @Column({
        nullable: false,
        type: 'varchar',
    })
    mail: string; //Je nomme le nom de la colonne et la type

    @Column({
        nullable: false,
        type: 'varchar',
        length: 50,
    }) //je précise le varchar car pas en 255.
    pseudo: string;
    //TypeOrm est typé par default en varchar 255 si autre le préciser

    @Column({
        nullable: false,
    })
    password: string;
    @Column({
        nullable: true,
        type: 'varchar',

    })
    adress: string;
    @Column({
        nullable: true,
        type: 'varchar',

    })
    city: string;
    @Column({
        nullable: true,
        type: 'varchar',

    })
    country: string;
    @Column({
        nullable: true,
        type: 'int',

    })
    postalCode: number;


    @Column({
        type: 'enum',
        enum: RoleEnumType,
        default: RoleEnumType.USER,
    })
    role: RoleEnumType;
}

