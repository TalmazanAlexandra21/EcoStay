import { Controller, Post, Body, Get, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Rezervare } from '../rezervari/entities/rezervari.entity';
import { Cabane } from '../cabane/entities/cabane.entity';
import { Recenzie } from '../cabane/entities/recenzie.entity';

@Controller('admin')
export class AdminController {
  constructor(
    @InjectRepository(Rezervare)
    private rezervareRepo: Repository<Rezervare>,
    @InjectRepository(Cabane)
    private cabaneRepo: Repository<Cabane>,
    @InjectRepository(Recenzie)
    private recenzieRepo: Repository<Recenzie>,
  ) {}

  @Post('login')
  async login(@Body() body: any) {
    console.log("Date primite din frontend:", body); 
    if (body.username === 'admin' && body.password === 'admin123') {
      return { success: true };
    }
    throw new UnauthorizedException('Date incorecte!');
  }

  @Get('statistici')
  async getStatistici() {
    const totalRezervari = await this.rezervareRepo.count();
    const totalCabane = await this.cabaneRepo.count();
    const totalRecenzii = await this.recenzieRepo.count();
    return { totalRezervari, totalCabane, totalRecenzii };
  }
}