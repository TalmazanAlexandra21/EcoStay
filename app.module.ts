import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cabane } from './cabane/entities/cabane.entity';
import { CabaneModule } from './cabane/cabane.module';
import { Rezervare } from './rezervari/entities/rezervari.entity'; // Importă și entitatea nouă!
import { RezervariModule } from './rezervari/rezervari.module';
import { Recenzie } from './cabane/entities/recenzie.entity';
import { RecenziiModule } from './recenzii/recenzii.module';
import { AdminModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres', // <--- ACEASTA ESTE LINIA CARE LIPSEȘTE (folosește 'postgres' dacă asta ai instalat)
      host: 'localhost',
      port: 5432, // Portul default pentru Postgres
      username: 'postgres', // Numele tău de utilizator (verifică setările din pgAdmin)
      password: 'postgres', // Parola ta
      database: 'eco_stay', // Numele bazei de date creată în pgAdmin
      entities: [Cabane, Rezervare, Recenzie], // Adaugă ambele entități aici
      synchronize: true, // Automatizează crearea tabelelor
    }),
    CabaneModule,
    RezervariModule, // Nu uita să adaugi modulul de rezervări
    RecenziiModule,
    AdminModule,
  ],
})
export class AppModule {}