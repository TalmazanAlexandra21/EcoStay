import { Controller, Get } from '@nestjs/common';
import { CabaneService } from './cabane.service';

@Controller('cabane')
export class CabaneController {
  constructor(private readonly cabaneService: CabaneService) {}

  @Get()
  async findAll() {
    return this.cabaneService.findAll();
  }
}