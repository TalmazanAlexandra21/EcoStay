import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../cabane/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>,
  ) {}

  async login(username: string, pass: string) {
    const user = await this.userRepo.findOne({ where: { username } });
    if (user && user.password === pass) {
      return { success: true, token: 'fake-jwt-token' };
    }
    throw new UnauthorizedException('Date invalide');
  } // Aceasta închide metoda login
} 