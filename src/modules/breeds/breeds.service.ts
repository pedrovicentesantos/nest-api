import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import DogBreed from 'src/database/entities/DogBreed.entity';
import { Repository } from 'typeorm';
import CreateBreedDto from './dtos/create-breed.dto';

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
}
