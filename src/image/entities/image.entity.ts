
import { User } from 'src/user/entities/user.entity';
import {
    Column,
    CreateDateColumn,
    Entity,
    JoinTable,
    ManyToMany,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
} from 'typeorm';
@Entity()
export class Image {


    @PrimaryGeneratedColumn('uuid')
    id?: string;

    @Column({
        nullable: false,
        type: 'varchar',
        length: 50,
    })
    description: string;



    @Column({
        nullable: false,
        type: 'varchar',

    })
    picture: string;



    @ManyToOne(() => User, (user) => user.id, {
        onDelete: 'CASCADE',
        nullable: true
    })
    user: User;
}
