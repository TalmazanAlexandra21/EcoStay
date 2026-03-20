import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Cabane } from '../../cabane/entities/cabane.entity';

@Entity()
export class Rezervare {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  numeClient: string;

  @Column()
  email: string;

  @Column()
  dataStart: string;

  @Column()
  dataFinal: string;

  @ManyToOne(() => Cabane, (cabana) => cabana.rezervari)
  cabana: Cabane;
}