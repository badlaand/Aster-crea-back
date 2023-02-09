import { GiftcardsByOrder } from 'src/giftcards-by-order/entities/giftcards-by-order.entity';
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
export class GiftCard {


    @PrimaryGeneratedColumn('uuid')
    id?: string;

    @Column({
        nullable: false,
        type: 'varchar',
        length: 50,
    })
    customer: string;

    @CreateDateColumn()
    dateGiftCardcreation: Date
    @Column({
        nullable: true,
        type: 'varchar',

    })
    cardNumber: string;

    @Column({
        nullable: false,
        type: 'float',
    })
    amount: number;

    @ManyToOne(() => User, (user) => user.id, {
        onDelete: 'CASCADE',
        nullable: true
    })
    user: User;
    @OneToMany(() => GiftcardsByOrder, (giftcardsByOrder) => giftcardsByOrder.giftcard)
    public giftcardsToPurchase: GiftcardsByOrder[]


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

