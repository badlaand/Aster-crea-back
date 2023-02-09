import { ProductsByOrder } from 'src/products-by-order/entities/products-by-order.entity';
import { Purchase } from 'src/purchase/entities/purchase.entity';
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
export class Product {


    @PrimaryGeneratedColumn('uuid')
    id?: string;

    @Column({
        nullable: false,
        type: 'varchar',
        length: 50,
    })
    title: string;



    @Column({
        nullable: false,
        type: 'varchar',
        length: 50
    })
    category: string;

    @Column({
        nullable: false,
        type: 'varchar',
    })
    picture: string;

    @Column({
        nullable: false,
        type: 'boolean'
    })
    customable: boolean;

    @Column({
        nullable: false,
        type: 'float'
    })
    price: number;

    @Column({
        nullable: false,
        type: 'text'
    })
    description: string;
    @ManyToOne(() => User, (user) => user.id, {
        onDelete: 'CASCADE',
        nullable: true
    })
    user: User;

    @OneToMany(() => ProductsByOrder, (productsByOrder) => productsByOrder.products)
    public productsByOrder: ProductsByOrder[]

    // @ManyToOne(() => Categorie, (categories) => categories.taches, {
    //     onDelete: 'CASCADE',
    //     eager: true,
    // })
    // categorie_: Categorie;

    // @ManyToOne(() => Utilisateur, (user_) => user_.id, {
    //     onDelete: 'CASCADE',
    //     nullable: false,
    // })
    // user_: Utilisateur;
}

