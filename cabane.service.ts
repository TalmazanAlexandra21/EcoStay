import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cabane } from './entities/cabane.entity';

@Injectable()
export class CabaneService {
  constructor(
    @InjectRepository(Cabane)
    private repo: Repository<Cabane>,
  ) {}

  findAll(): Promise<Cabane[]> {
    return this.repo.find();
  }
}