import { Controller, Post, Body, Get } from '@nestjs/common';
import { RezervareService } from './rezervari.service';

@Controller('rezervari')
export class RezervareController { // <--- Trebuie să ai "export" aici!
  constructor(private readonly rezervareService: RezervareService) {}

  @Get()
  async findAll() {
    return this.rezervareService.findAll();
  }

  @Post()
  async create(@Body() data: any) {
    return this.rezervareService.create(data);
  }
} 