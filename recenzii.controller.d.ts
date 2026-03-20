import { RecenziiService } from './recenzii.service';
export declare class RecenziiController {
    private readonly recenziiService;
    constructor(recenziiService: RecenziiService);
    getAll(): Promise<any[]>;
    create(data: any): Promise<any>;
}
