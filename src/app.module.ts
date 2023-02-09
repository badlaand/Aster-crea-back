import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { GiftCardModule } from './gift-card/gift-card.module';
import { PurchaseModule } from './purchase/purchase.module';
import * as dotenv from 'dotenv'
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entities/user.entity';
import { GiftCard } from './gift-card/entities/gift-card.entity';
import { Purchase } from './purchase/entities/purchase.entity';
import { Product } from './product/entities/product.entity';
import { ConfigModule } from '@nestjs/config';
import { ProductsByOrderModule } from './products-by-order/products-by-order.module';
import { GiftcardsByOrderModule } from './giftcards-by-order/giftcards-by-order.module';
import { GiftcardsByOrder } from './giftcards-by-order/entities/giftcards-by-order.entity';
import { ProductsByOrder } from './products-by-order/entities/products-by-order.entity';
import { ImageModule } from './image/image.module';
import { Image } from './image/entities/image.entity';
import { AuthModule } from './auth/auth.module';
import { MulterModule } from '@nestjs/platform-express';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';


@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env.local',
    }),
    MulterModule.register({ dest: './files', }),
    ServeStaticModule.forRoot({ rootPath: join(__dirname, '..', 'files') }),
    TypeOrmModule.forFeature([User, GiftCard, Product, Purchase, Image]),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [User, GiftCard, Purchase, Product, GiftcardsByOrder, ProductsByOrder, Image],
      synchronize: process.env.MODE === 'DEV' ? true : false,
    }), UserModule, ProductModule, GiftCardModule, PurchaseModule, ProductsByOrderModule, GiftcardsByOrderModule, ImageModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
