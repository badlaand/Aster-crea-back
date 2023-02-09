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

export class GiftcardsByOrder {


    @PrimaryGeneratedColumn('uuid')
    id?: string;

    @Column({
        nullable: false,
        type: 'int',

    })
    quantity: number;
    @Column()
    public giftcardId: string
    @Column()
    public forPurchaseId: string



    @ManyToOne(() => GiftCard, (giftCard) => giftCard.giftcardsToPurchase,
        { eager: true })
    public giftcard: GiftCard
    @ManyToOne(() => Purchase, (purchase) => purchase.giftcardsByOrder,
        { eager: true })
    public forPurchase: Purchase

}