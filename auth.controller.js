"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminController = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const rezervari_entity_1 = require("../rezervari/entities/rezervari.entity");
const cabane_entity_1 = require("../cabane/entities/cabane.entity");
const recenzie_entity_1 = require("../cabane/entities/recenzie.entity");
let AdminController = class AdminController {
    rezervareRepo;
    cabaneRepo;
    recenzieRepo;
    constructor(rezervareRepo, cabaneRepo, recenzieRepo) {
        this.rezervareRepo = rezervareRepo;
        this.cabaneRepo = cabaneRepo;
        this.recenzieRepo = recenzieRepo;
    }
    async login(body) {
        console.log("Date primite din frontend:", body);
        if (body.username === 'admin' && body.password === 'admin123') {
            return { success: true };
        }
        throw new common_1.UnauthorizedException('Date incorecte!');
    }
    async getStatistici() {
        const totalRezervari = await this.rezervareRepo.count();
        const totalCabane = await this.cabaneRepo.count();
        const totalRecenzii = await this.recenzieRepo.count();
        return { totalRezervari, totalCabane, totalRecenzii };
    }
};
exports.AdminController = AdminController;
__decorate([
    (0, common_1.Post)('login'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "login", null);
__decorate([
    (0, common_1.Get)('statistici'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "getStatistici", null);
exports.AdminController = AdminController = __decorate([
    (0, common_1.Controller)('admin'),
    __param(0, (0, typeorm_1.InjectRepository)(rezervari_entity_1.Rezervare)),
    __param(1, (0, typeorm_1.InjectRepository)(cabane_entity_1.Cabane)),
    __param(2, (0, typeorm_1.InjectRepository)(recenzie_entity_1.Recenzie)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], AdminController);
//# sourceMappingURL=auth.controller.js.map