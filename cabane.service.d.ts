import { Repository } from 'typeorm';
import { Cabane } from './entities/cabane.entity';
export declare class CabaneService {
    private repo;
    constructor(repo: Repository<Cabane>);
    findAll(): Promise<Cabane[]>;
}
