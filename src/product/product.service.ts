import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProductService {
  constructor(@InjectRepository(Product)
  private productRepository: Repository<Product>,) { }
  async create(createProductDto: CreateProductDto): Promise<Product> {
    const { title, category, picture, customable, price, description } = createProductDto;
    const newProduct = await this.productRepository.create({
      ...createProductDto,
    });
    try {
      return await this.productRepository.save(newProduct)

    } catch (error) {

    }

  }

  async findAll(): Promise<Product[]> {
    return await this.productRepository.find();
  }

  async findOne(id: string): Promise<Product | string> {
    const productFound: Product = await this.productRepository.findOneBy({
      id: id
    });
    if (!productFound) {
      throw new Error("aucun produit n'a été trouvé");

    }
    return productFound
  }

  async update(id: string, updateProductDto: UpdateProductDto): Promise<Product | string> {
    const updateProduct = await this.productRepository.findOneBy({
      id: id
    })
    const { title, category, picture, customable, price, description } = updateProductDto;
    if (!updateProduct) {
      throw new Error("Aucun produit n'a été trouvé");

    }
    try {
      if (!updateProductDto.title) {
        updateProduct.title = updateProduct.title
      }
      else {
        updateProduct.title = updateProductDto.title
      }
      if (!updateProductDto.category) {
        updateProduct.category = updateProduct.category
      }
      else {
        updateProduct.category = updateProductDto.category
      }
      if (!updateProductDto.picture) {
        updateProduct.picture = updateProduct.picture
      }
      else {
        updateProduct.picture = updateProductDto.picture
      }
      if (!updateProductDto.customable) {
        updateProduct.customable = updateProduct.customable
      }
      else {
        updateProduct.customable = updateProductDto.customable
      }
      if (!updateProductDto.price) {
        updateProduct.price = updateProduct.price
      }
      else {
        updateProduct.price = updateProductDto.price
      }
      if (!updateProductDto.description) {
        updateProduct.description = updateProduct.description
      }
      else {
        updateProduct.description = updateProductDto.description
      }
      return await this.productRepository.save(updateProduct)
    } catch (error) {

    }

    ;
  }

  async remove(id: string) {
    const result = await this.productRepository.delete({
      id
    })
    if (result.affected === 0) {
      throw new Error("Aucun produit n'a été trouvé");

    };
    return "Vous avez supprimé le produit"
  }
}
