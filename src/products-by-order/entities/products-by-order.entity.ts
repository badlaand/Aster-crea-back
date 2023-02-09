import { GiftCard } from 'src/gift-card/entities/gift-card.entity';
import { Product } from 'src/product/entities/product.entity';
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

export class ProductsByOrder {


    @PrimaryGeneratedColumn('uuid')
    id?: string;

    @Column({
        nullable: false,
        type: 'int',

    })
    quantity: number;
    @Column()
    public productsId: string
    @Column()
    public forPurchaseId: string


    @ManyToOne(() => Product, (product) => product.id)
    public products: Product
    @ManyToOne(() => Purchase, (purchase) => purchase.id)
    public forPurchase: Purchase

}
