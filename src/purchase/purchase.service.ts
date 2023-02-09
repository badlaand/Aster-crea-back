import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePurchaseDto } from './dto/create-purchase.dto';
import { UpdatePurchaseDto } from './dto/update-purchase.dto';
import { Purchase } from './entities/purchase.entity';

@Injectable()
export class PurchaseService {
  constructor(@InjectRepository(Purchase)
  private purchaseRepository: Repository<Purchase>) { }
  async create(createPurchaseDto: CreatePurchaseDto): Promise<Purchase | string> {
    const { email } = createPurchaseDto
    const query = await this.purchaseRepository.createQueryBuilder();
    let number = Math.floor(Math.random() * 99999 + 1)
    let numberString = number.toString()
    const purchaseNumber = numberString.padStart(5, '0')
    let stopCondition = false
    while (stopCondition === false) {
      let number = Math.floor(Math.random() * 99999 + 1)
      let numberString = number.toString()
      const purchaseNumber = numberString.padStart(5, '0')
      query.where({ purchaseNumber })
      let existAlready = await query.getOne()
      if (!existAlready) {
        stopCondition = true
        const newPurchase = await this.purchaseRepository.create({
          ...createPurchaseDto,
          purchaseNumber
        })
        return await this.purchaseRepository.save(newPurchase)
      }

    }

  }

  async findAll(): Promise<Purchase[]> {
    return await this.purchaseRepository.find();
  }

  async findOne(id: string): Promise<Purchase | string> {
    const purchaseFound = await this.purchaseRepository.findOneBy({ id: id })
    if (!purchaseFound) {
      throw new Error("Aucune commande trouvée");

    }
    return purchaseFound;
  }

  async update(id: string, updatePurchaseDto: UpdatePurchaseDto): Promise<Purchase | string> {
    const { endDate, status } = updatePurchaseDto
    const purchaseToUpdate = await this.purchaseRepository.findOneBy({ id: id })
    if (!purchaseToUpdate) {
      throw new Error("La commande n'a pas été trouvée");
    }
    try {
      if (updatePurchaseDto.endDate !== null) {
        purchaseToUpdate.endDate = updatePurchaseDto.endDate

      }
      if (updatePurchaseDto.status !== null) {
        purchaseToUpdate.status = updatePurchaseDto.status
      }
      return await this.purchaseRepository.save(purchaseToUpdate)


    } catch (error) {

    }

  }



  async remove(id: string): Promise<Purchase | string> {
    const result = await this.purchaseRepository.delete({
      id: id
    });
    if (result.affected === 0) {
      throw new Error("Aucune commande trouvée");

    }
    return "Vous avez bien supprimé la commande"


  }
}
