import { Controller, Get, Post, Body } from '@nestjs/common';
import { RecenziiService } from './recenzii.service';

@Controller('recenzii')
export class RecenziiController {
  constructor(private readonly recenziiService: RecenziiService) {}

  @Get()
  async getAll() {
    return this.recenziiService.findAll();
  }

  @Post()
  async create(@Body() data: any) {
    return this.recenziiService.create(data);
  }
}