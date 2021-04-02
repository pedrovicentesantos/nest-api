import {
  Body,
  Controller,
  Delete,
  Get,
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
  find(@Param('id') id: string): Promise<DogBreed> {
    return this.breedsService.find(id);
  }

  @Post()
  create(@Body() dto: CreateBreedDto): void {
    this.breedsService.create(dto);
  }

  @Delete(':id')
  delete(@Param('id') id: string): void {
    return this.breedsService.delete(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateBreedDto): void {
    this.breedsService.update(id, dto);
  }
}
