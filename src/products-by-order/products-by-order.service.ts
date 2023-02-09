import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductsByOrderDto } from './dto/create-products-by-order.dto';
import { UpdateProductsByOrderDto } from './dto/update-products-by-order.dto';
import { ProductsByOrder } from './entities/products-by-order.entity';

@Injectable()
export class ProductsByOrderService {
  constructor(@InjectRepository(ProductsByOrder)
  private productByOrderRepository: Repository<ProductsByOrder>) { }
  async create(createProductsByOrderDto: CreateProductsByOrderDto): Promise<ProductsByOrder> {
    const newProductByOrder = await this.productByOrderRepository.create(createProductsByOrderDto)
    try {
      return await this.productByOrderRepository.save(newProductByOrder)
    } catch (error) {

    }
  }

  async findAll(): Promise<ProductsByOrder[]> {
    return await this.productByOrderRepository.find();
  }

  async findOne(id: string): Promise<ProductsByOrder> {
    const productByOrderFound = await this.productByOrderRepository.findOneBy({ id });
    if (!productByOrderFound) {
      throw new Error("Nous n'avons trouvé aucun produit dans cette commande");

    }
    else {
      try {
        return productByOrderFound
      } catch (error) {

      }
    }
  }

  update(id: string, updateProductsByOrderDto: UpdateProductsByOrderDto) {
    return `This action updates a #${id} productsByOrder`;
  }

  async remove(id: string): Promise<ProductsByOrder | string> {
    const result = await this.productByOrderRepository.delete({ id })
    if (result.affected === 0) {
      throw new Error("Le produit n'a pas été trouvé dans la commande");

    }
    return `Le produit a bien été supprimé de la commande`;
  }
}
