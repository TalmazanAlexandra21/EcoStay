import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Rezervare } from '../../rezervari/entities/rezervari.entity'; // Ajustează calea corectă

@Entity()
export class Cabane {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nume: string;

  @Column()
  pret: number;

  @Column({ nullable: true })
  imagineUrl: string;

  // Această linie rezolvă eroarea TS2339
  @OneToMany(() => Rezervare, (rezervare) => rezervare.cabana)
  rezervari: Rezervare[];
}