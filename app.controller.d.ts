import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    getCabane(): {
        nume: string;
        locatie: string;
        imagine: string;
    }[];
}
