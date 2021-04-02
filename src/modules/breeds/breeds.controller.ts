import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import DogBreed from 'src/database/entities/DogBreed.entity';
import { BreedsService } from './breeds.service';
import CreateBreedDto from './dtos/create-breed.dto';
import UpdateBreedDto from './dtos/update-breed.dto';

@Controller('breeds')
export class BreedsController {
  constructor(private readonly breedsService: BreedsService) {}

  @Get()
  findAll(): Promise<DogBreed[]> {
    return this.breedsService.findAll();
  }

  @Get(':id')
  async find(@Param('id') id: string): Promise<DogBreed> {
    const breed = await this.breedsService.find(id);
    if (breed) return this.breedsService.find(id);
    throw new HttpException('Breed not found', HttpStatus.NOT_FOUND);
  }

  @Post()
  create(@Body() dto: CreateBreedDto): void {
    if (!dto.name || !dto.imageUrl)
      throw new HttpException(
        'Name and/or imageUrl not found in body',
        HttpStatus.BAD_REQUEST,
      );
    this.breedsService.create(dto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    const breed = await this.breedsService.delete(id);
    if (!breed) {
      throw new HttpException('Breed not found', HttpStatus.NOT_FOUND);
    }
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() dto: UpdateBreedDto,
  ): Promise<void> {
    const breed = await this.breedsService.update(id, dto);
    if (!breed) {
      throw new HttpException('Breed not found', HttpStatus.NOT_FOUND);
    }
  }
}
