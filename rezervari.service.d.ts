import { Repository } from 'typeorm';
import { Rezervare } from './entities/rezervari.entity';
export declare class RezervareService {
    private repo;
    constructor(repo: Repository<Rezervare>);
    create(data: any): Promise<Rezervare[]>;
    findAll(): Promise<Rezervare[]>;
    private trimiteEmailConfirmare;
}
