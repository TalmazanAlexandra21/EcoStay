import { Repository } from 'typeorm';
import { Rezervare } from '../rezervari/entities/rezervari.entity';
import { Cabane } from '../cabane/entities/cabane.entity';
import { Recenzie } from '../cabane/entities/recenzie.entity';
export declare class AdminController {
    private rezervareRepo;
    private cabaneRepo;
    private recenzieRepo;
    constructor(rezervareRepo: Repository<Rezervare>, cabaneRepo: Repository<Cabane>, recenzieRepo: Repository<Recenzie>);
    login(body: any): Promise<{
        success: boolean;
    }>;
    getStatistici(): Promise<{
        totalRezervari: number;
        totalCabane: number;
        totalRecenzii: number;
    }>;
}
