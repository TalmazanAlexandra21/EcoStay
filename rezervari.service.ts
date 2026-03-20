import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Rezervare } from './entities/rezervari.entity';
import * as nodemailer from 'nodemailer';

@Injectable()
export class RezervareService {
  constructor(
    @InjectRepository(Rezervare)
    private repo: Repository<Rezervare>,
  ) {}

  async create(data: any) {
    console.log('Creating reservation with data:', data);
    const nouaRezervare = this.repo.create(data);
    const saved = await this.repo.save(nouaRezervare);
    console.log('Saved:', saved);

    // Trimite email de confirmare
    await this.trimiteEmailConfirmare(data);

    return saved;
  }

  findAll(): Promise<Rezervare[]> {
    return this.repo.find({ relations: ['cabana'] });
  }

  private async trimiteEmailConfirmare(data: any) {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'talmazanalexandra06@gmail.com',     // ← înlocuiește cu emailul tău
        pass: 'cfha ebqv kqbl xttg',           // ← vezi pasul 3
      },
    });

    const numareCabana: Record<string, string> = {
      '1': 'Cabana Forest View',
      '2': 'Eco Glass House',
      '3': 'Tiny House Retreat',
    };

    const numeCabana = numareCabana[String(data.cabanaId)] || 'Cabana selectată';

    await transporter.sendMail({
      from: '"EcoStay Moldova" <emailul_tau@gmail.com>',
      to: data.email,
      subject: '✅ Confirmare Rezervare - EcoStay',
      html: `
        <div style="font-family: Poppins, Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #e0e0e0; border-radius: 12px; overflow: hidden;">
          
          <!-- Header -->
          <div style="background: #2d5a27; padding: 30px; text-align: center;">
            <h1 style="color: white; margin: 0;">🌲 EcoStay Moldova</h1>
            <p style="color: #a8d5ba; margin: 5px 0 0;">Confirmare Rezervare</p>
          </div>

          <!-- Body -->
          <div style="padding: 30px;">
            <p style="font-size: 16px;">Bună, <strong>${data.numeClient}</strong>!</p>
            <p style="color: #555;">Rezervarea ta a fost înregistrată cu succes. Iată detaliile:</p>

            <div style="background: #f9fbf9; border-radius: 8px; padding: 20px; margin: 20px 0;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; color: #888;">🏠 Cabana</td>
                  <td style="padding: 8px 0; font-weight: 600; color: #1a3317;">${numeCabana}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #888;">📅 Data sosirii</td>
                  <td style="padding: 8px 0; font-weight: 600; color: #1a3317;">${data.dataStart}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #888;">📅 Data plecării</td>
                  <td style="padding: 8px 0; font-weight: 600; color: #1a3317;">${data.dataFinal}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #888;">📧 Email</td>
                  <td style="padding: 8px 0; font-weight: 600; color: #1a3317;">${data.email}</td>
                </tr>
              </table>
            </div>

            <p style="color: #555;">Te așteptăm cu drag! Dacă ai întrebări, ne poți contacta oricând.</p>
            
            <div style="text-align: center; margin-top: 25px;">
              <a href="http://localhost:3000" 
                 style="background: #2d5a27; color: white; padding: 12px 30px; border-radius: 8px; text-decoration: none; font-weight: 600;">
                Vizitează EcoStay
              </a>
            </div>
          </div>

          <!-- Footer -->
          <div style="background: #1a3317; padding: 15px; text-align: center;">
            <p style="color: #a8d5ba; margin: 0; font-size: 13px;">© 2026 EcoStay Moldova</p>
          </div>

        </div>
      `,
    });

    console.log('Email de confirmare trimis către:', data.email);
  }
}