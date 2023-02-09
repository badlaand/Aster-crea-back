import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateGiftcardsByOrderDto } from './dto/create-giftcards-by-order.dto';
import { UpdateGiftcardsByOrderDto } from './dto/update-giftcards-by-order.dto';
import { GiftcardsByOrder } from './entities/giftcards-by-order.entity';

@Injectable()
export class GiftcardsByOrderService {
  constructor(@InjectRepository(GiftcardsByOrder)
  private giftcardByOrderRepository: Repository<GiftcardsByOrder>) { }
  async create(createGiftcardsByOrderDto: CreateGiftcardsByOrderDto): Promise<GiftcardsByOrder> {
    const newGiftcardByOrder = await this.giftcardByOrderRepository.create(createGiftcardsByOrderDto);
    try {
      return await this.giftcardByOrderRepository.save(newGiftcardByOrder)

    } catch (error) {

    }

  }

  async findAll(): Promise<GiftcardsByOrder[]> {
    return await this.giftcardByOrderRepository.find();
  }

  async findOne(id: string): Promise<GiftcardsByOrder> {
    const giftcardByOrderfound = await this.giftcardByOrderRepository.findOneBy({ id });
    if (!giftcardByOrderfound) {
      throw new Error("Nous n'avons pas trouvé de carte cadeau dans cette commande");
    }
    else {
      try {
        return giftcardByOrderfound

      } catch (error) {

      }
    }
  }

  update(id: number, updateGiftcardsByOrderDto: UpdateGiftcardsByOrderDto) {
    return `This action updates a #${id} giftcardsByOrder`;
  }

  async remove(id: string): Promise<GiftcardsByOrder | string> {
    const result = await this.giftcardByOrderRepository.delete({ id })
    if (result.affected === 0) {
      throw new Error("Pas de carte cadeau dans la commande");

    }
    return `La carte cadeau a bien été supprimée de la commande`;
  }
}
