import { Repository } from 'typeorm';
import { Recenzie } from '../cabane/entities/recenzie.entity';
export declare class RecenziiService {
    private readonly recenziiRepo;
    constructor(recenziiRepo: Repository<Recenzie>);
    findAll(): Promise<any[]>;
    create(data: any): Promise<any>;
}
