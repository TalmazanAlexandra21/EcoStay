import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getCabane() {
    return [
      { 
        nume: 'Cabana Forest', 
        locatie: 'Orhei', 
        imagine: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=500' 
      },
      { 
        nume: 'Eco Lodge', 
        locatie: 'Butuceni', 
        imagine: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=500' 
      },
      { 
        nume: 'River House', 
        locatie: 'Nistru', 
        imagine: 'https://images.unsplash.com/photo-1542718610-a1d656d1884c?w=500' 
      }
    ];
  }
}