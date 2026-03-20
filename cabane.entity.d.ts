import { Rezervare } from '../../rezervari/entities/rezervari.entity';
export declare class Cabane {
    id: number;
    nume: string;
    pret: number;
    imagineUrl: string;
    rezervari: Rezervare[];
}
