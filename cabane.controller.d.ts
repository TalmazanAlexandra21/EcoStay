import { CabaneService } from './cabane.service';
export declare class CabaneController {
    private readonly cabaneService;
    constructor(cabaneService: CabaneService);
    findAll(): Promise<import("./entities/cabane.entity").Cabane[]>;
}
