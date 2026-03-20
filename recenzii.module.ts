import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RecenziiController } from './recenzii.controller';
import { RecenziiService } from './recenzii.service';
// Importul corect către locația centralizată a entităților
import { Recenzie } from '../cabane/entities/recenzie.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Recenzie])],
  controllers: [RecenziiController],
  providers: [RecenziiService],
})
export class RecenziiModule {}