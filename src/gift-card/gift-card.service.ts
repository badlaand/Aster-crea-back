import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateGiftCardDto } from './dto/create-gift-card.dto';
import { UpdateGiftCardDto } from './dto/update-gift-card.dto';
import { GiftCard } from './entities/gift-card.entity';

@Injectable()
export class GiftCardService {
  constructor(@InjectRepository(GiftCard)
  private giftcardRepository: Repository<GiftCard>) { }
  async create(createGiftCardDto: CreateGiftCardDto): Promise<GiftCard | string> {
    const { customer, amount } = createGiftCardDto;
    const query = await this.giftcardRepository.createQueryBuilder();



    ;

    let number = Math.floor(Math.random() * 99999 + 1)
    let numberString = number.toString()
    const cardNumber = numberString.padStart(5, '0')
    console.log(number, numberString, cardNumber)



    let stopCondition = false

    while (stopCondition === false) {
      let number = Math.floor(Math.random() * 99999 + 1)
      let numberString = number.toString()
      const cardNumber = numberString.padStart(5, '0')
      query.where({ cardNumber });
      let existAlready = await query.getOne()
      console.log('exist', existAlready)
      if (!existAlready) {
        stopCondition = true
        const newGiftcard = await this.giftcardRepository.create({
          ...createGiftCardDto,
          cardNumber

        })
        console.log(cardNumber, 'cardnumber', stopCondition, 'stop')
        return await this.giftcardRepository.save(newGiftcard)




      }
      // const newGiftcard = await this.giftcardRepository.create({
      //   ...createGiftCardDto,
      //   cardNumber
      // })
      // return await this.giftcardRepository.save(newGiftcard)





    }













    /*
    let conditionArret = false;

    while(conditionArret == false) {
      const nopmbreRandom = random();
      // check dans la BDD 
       //code 
      const existAlready = checkBDD(nopmbreRandom)
      if (!existAlready){
        conditionArret = true;
      }
    }
    */




  }



  // let cardNumber = random()
  // const newGiftcard = await this.giftcardRepository.create({
  //   ...createGiftCardDto,
  //   cardNumber


  // })
  // return await this.giftcardRepository.save(newGiftcard)





  // let newNumber = Math.floor(Math.random() * 10 + 1)
  // let newNumberString = newNumber.toString()
  // cardNumber = newNumberString.padStart(5, '0')
  // existAlready = query.getOne();
  // if (existAlready === null) {

  //   await this.giftcardRepository.create({
  //     ...createGiftCardDto,
  //     cardNumber
  //   })
  //   await this.giftcardRepository.save(newGiftcard)

  // }
  // else { break }

  // const existAlready = await query.getOne();
  // this.giftcardRepository.create({
  //   ...createGiftCardDto,
  //   cardNumber
  // })
  // let number2 = Math.floor(Math.random() * 10 + 1)
  // let numberString2 = number2.toString()
  // let cardNumber = numberString2.padStart(5, '0')
  // const newGiftcard2 = await this.giftcardRepository.create({
  //   ...createGiftCardDto,
  //   cardNumber
  // })
  // return await this.giftcardRepository.save(newGiftcard2)




  // const newGiftcard = await this.giftcardRepository.create({
  //   ...createGiftCardDto,
  //   cardNumber
  // })
  // try {
  //   return await this.giftcardRepository.save(newGiftcard)
  // } catch (error) {

  // }



  async findAll(): Promise<GiftCard[]> {
    return await this.giftcardRepository.find();
  }

  async findOne(id: string): Promise<GiftCard> {
    const giftcardFound = await this.giftcardRepository.findOneBy({ id });
    if (!giftcardFound) {
      throw new Error("Aucune carte cadeau trouvée");
    }
    return giftcardFound
  }

  update(id: number, updateGiftCardDto: UpdateGiftCardDto) {
    return `This action updates a #${id} giftCard`;
  }

  async remove(id: string): Promise<GiftCard | string> {
    const result = await this.giftcardRepository.delete({ id })
    if (result.affected === 0) {
      throw new Error("Aucune carte cadeau trouvée");
    }
    return 'La carte cadeau a bien été supprimée'
  }
}

