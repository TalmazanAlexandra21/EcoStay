import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Recenzie } from '../cabane/entities/recenzie.entity';

@Injectable()
export class RecenziiService {
  constructor(
    @InjectRepository(Recenzie)
    private readonly recenziiRepo: Repository<Recenzie>,
  ) {}

  async findAll(): Promise<any[]> {
    return await this.recenziiRepo.find({
      order: { dataPostarii: 'DESC' },
    });
  }

  async create(data: any): Promise<any> {
    // Salvăm direct și returnăm ca 'any' pentru a ignora erorile de tipizare TS
    const salvat = await this.recenziiRepo.save(data);
    return salvat;
  }
}