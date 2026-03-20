"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RezervareService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const rezervari_entity_1 = require("./entities/rezervari.entity");
const nodemailer = __importStar(require("nodemailer"));
let RezervareService = class RezervareService {
    repo;
    constructor(repo) {
        this.repo = repo;
    }
    async create(data) {
        console.log('Creating reservation with data:', data);
        const nouaRezervare = this.repo.create(data);
        const saved = await this.repo.save(nouaRezervare);
        console.log('Saved:', saved);
        await this.trimiteEmailConfirmare(data);
        return saved;
    }
    findAll() {
        return this.repo.find({ relations: ['cabana'] });
    }
    async trimiteEmailConfirmare(data) {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'talmazanalexandra06@gmail.com',
                pass: 'cfha ebqv kqbl xttg',
            },
        });
        const numareCabana = {
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
};
exports.RezervareService = RezervareService;
exports.RezervareService = RezervareService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(rezervari_entity_1.Rezervare)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], RezervareService);
//# sourceMappingURL=rezervari.service.js.map