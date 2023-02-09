import { GiftCard } from 'src/gift-card/entities/gift-card.entity';
import { GiftcardsByOrder } from 'src/giftcards-by-order/entities/giftcards-by-order.entity';
import { Product } from 'src/product/entities/product.entity';
import { ProductsByOrder } from 'src/products-by-order/entities/products-by-order.entity';
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
export class Purchase {
    @PrimaryGeneratedColumn('uuid')
    id?: string;



    @CreateDateColumn()
    purchaseDate: Date;

    @Column({
        nullable: true,
        type: 'date',
    })
    endDate: string;
    @Column({
        nullable: false,
        type: 'varchar',
    })
    email: string;
    @Column({
        nullable: false,
        type: 'varchar',
    })
    adress: string;
    @Column({
        nullable: false,
        type: 'varchar',
    })
    city: string;
    @Column({
        nullable: false,
        type: 'varchar',
    })
    country: string;
    @Column({
        nullable: false,
        type: 'int',
    })
    postalCode: number;
    @Column({
        nullable: false,
        type: 'varchar',
    })
    purchaseNumber: string;

    @Column({
        nullable: false,
        type: 'varchar',
        default: 'en cours'
    })

    status: string;

    @ManyToOne(() => User, (user) => user.id, {
        onDelete: 'CASCADE',
        nullable: true
    })
    user: User;

    @OneToMany(() => GiftcardsByOrder, (giftcardsByOrder) => giftcardsByOrder.forPurchase)
    public giftcardsByOrder: GiftcardsByOrder[];
    @OneToMany(() => ProductsByOrder, (productssByOrder) => productssByOrder.forPurchase)
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