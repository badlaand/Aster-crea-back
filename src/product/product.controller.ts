import {
  Controller, Get, Post, Body, Patch, Param, Delete, UploadedFile, UseInterceptors,
  UploadedFiles,
  Res,
  StreamableFile,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { createReadStream } from 'fs';
import { join } from 'path';
import type { Response } from 'express';
import { Product } from './entities/product.entity';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) { }



  @Post()
  @UseInterceptors(FileInterceptor('file'))
  create(@UploadedFile() file: Express.Multer.File,
    @Body() body: CreateProductDto,): Promise<Product> {
    const product: CreateProductDto = {
      ...body,
      picture: file.filename,
    }
    return this.productService.create(product)

  }



  @Get()
  findAll(): Promise<Product[]> {
    return this.productService.findAll();
  }
  @Get(':filename')
  getFile(
    @Param('filename') filename: string,
    @Res({ passthrough: true }) res: Response,
  ): StreamableFile {
    const file = createReadStream(join(process.cwd(), `./files/${filename}`));
    res.set({
      'Content-Type': 'image/png',
    });
    return new StreamableFile(file);
  }

  @Post(':id')
  @UseInterceptors(FileInterceptor('file'))
  uploadFilePatch(
    @UploadedFile() file: Express.Multer.File,
    @Body() body,
    @Param('id') id: string,
  ) {
    const productupdated: UpdateProductDto = {
      title: body.productTitle,
      category: body.productCategory,
      picture: file.filename,
      customable: body.productCustomable,
      price: body.productPrice,
      description: body.productDescription


    }
    return this.productService.update(id, productupdated)
  }

  @Get('by/:id')
  findOne(@Param('id') id: string): Promise<Product | string> {
    return this.productService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto): Promise<Product | string> {
    return this.productService.update(id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productService.remove(id);
  }
}
