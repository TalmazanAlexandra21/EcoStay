import { RezervareService } from './rezervari.service';
export declare class RezervareController {
    private readonly rezervareService;
    constructor(rezervareService: RezervareService);
    findAll(): Promise<import("./entities/rezervari.entity").Rezervare[]>;
    create(data: any): Promise<import("./entities/rezervari.entity").Rezervare[]>;
}
