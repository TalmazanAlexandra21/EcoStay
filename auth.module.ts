import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminController } from './auth.controller';
import { Rezervare } from '../rezervari/entities/rezervari.entity';
import { Cabane } from '../cabane/entities/cabane.entity';
import { Recenzie } from '../cabane/entities/recenzie.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Rezervare, Cabane, Recenzie])],
  controllers: [AdminController],
})
export class AdminModule {}