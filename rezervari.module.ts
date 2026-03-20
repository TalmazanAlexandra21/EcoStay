import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Rezervare } from './entities/rezervari.entity';
import { RezervareService } from './rezervari.service';
import { RezervareController } from './rezervari.controller'; // Asigură-te că numele este acesta

@Module({
  imports: [TypeOrmModule.forFeature([Rezervare])],
  controllers: [RezervareController],
  providers: [RezervareService],
})
export class RezervariModule {} 