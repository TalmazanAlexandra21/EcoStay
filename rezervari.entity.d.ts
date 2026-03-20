import { Cabane } from '../../cabane/entities/cabane.entity';
export declare class Rezervare {
    id: number;
    numeClient: string;
    email: string;
    dataStart: string;
    dataFinal: string;
    cabana: Cabane;
}
