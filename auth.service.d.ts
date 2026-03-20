import { Repository } from 'typeorm';
import { User } from '../cabane/entities/user.entity';
export declare class AuthService {
    private userRepo;
    constructor(userRepo: Repository<User>);
    login(username: string, pass: string): Promise<{
        success: boolean;
        token: string;
    }>;
}
