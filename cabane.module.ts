import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CabaneController } from './cabane.controller';
import { CabaneService } from './cabane.service';
import { Cabane } from './entities/cabane.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cabane])],
  controllers: [CabaneController],
  providers: [CabaneService],
})
export class CabaneModule {}