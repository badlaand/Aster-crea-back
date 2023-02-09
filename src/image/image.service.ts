import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateImageDto } from './dto/create-image.dto';
import { UpdateImageDto } from './dto/update-image.dto';
import { Image } from './entities/image.entity';
@Injectable()
export class ImageService {
  constructor(@InjectRepository(Image)
  private imageRepository: Repository<Image>) { }
  async create(createImageDto: CreateImageDto): Promise<Image> {
    const newImage = await this.imageRepository.create({
      ...createImageDto
    })
    try {
      return await this.imageRepository.save(newImage)

    } catch (error) {

    }
  }

  async findAll(): Promise<Image[]> {
    return await this.imageRepository.find();
  }

  async findOne(id: string): Promise<Image | string> {
    const imageFound: Image = await this.imageRepository.findOneBy({ id: id })
    if (!imageFound) {
      throw new Error("aucune image n'a été trouvée");

    }
    return imageFound
  }


  async update(id: string, updateImageDto: UpdateImageDto): Promise<Image | string> {
    const updateImage = await this.imageRepository.findOneBy({ id: id })
    const { description, picture } = updateImageDto;
    if (!updateImage) {
      throw new Error("aucune image n'a été trouvée");

    }
    try {
      if (!updateImage.description) { updateImage.description = updateImage.description }
      else {
        updateImage.description = updateImageDto.description
      }
      if (!updateImage.picture) { updateImage.picture = updateImage.picture }
      else {
        updateImage.picture = updateImageDto.picture
      }
      return await this.imageRepository.save(updateImage)

    } catch (error) {

    }
  }

  async remove(id: string) {
    const result = await this.imageRepository.delete({ id })
    if (result.affected === 0) {
      throw new Error("aucune image n'a été trouvée");

    }
    return `Vous avez supprimé l'image`;
  }
}
