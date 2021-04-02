import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import DogBreed from 'src/database/entities/DogBreed.entity';
import { Repository } from 'typeorm';
import CreateBreedDto from './dtos/create-breed.dto';
import UpdateBreedDto from './dtos/update-breed.dto';

@Injectable()
export class BreedsService {
  constructor(
    @InjectRepository(DogBreed)
    private breedRepository: Repository<DogBreed>,
  ) {}

  findAll(): Promise<DogBreed[]> {
    return this.breedRepository.find();
  }

  create(dto: CreateBreedDto): void {
    this.breedRepository.insert({ Name: dto.name, ImageUrl: dto.imageUrl });
  }

  find(id: string): Promise<DogBreed> {
    return this.breedRepository.findOne(id);
  }

  delete(id: string): void {
    this.breedRepository.delete(id);
  }

  async update(id: string, dto: UpdateBreedDto): Promise<void> {
    const item = await this.breedRepository.findOne(id);
    this.breedRepository.update(id, {
      Name: dto.name || item.Name,
      ImageUrl: dto.imageUrl || item.ImageUrl,
    });
  }
}
