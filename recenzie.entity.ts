import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('recenzii')
export class Recenzie {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  numeClient: string;

  @Column({ type: 'text' })
  comentariu: string;

  @Column({ default: 5 })
  stele: number;

  @CreateDateColumn()
  dataPostarii: Date;
}