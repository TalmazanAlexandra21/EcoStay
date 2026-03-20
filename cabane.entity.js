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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cabane = void 0;
const typeorm_1 = require("typeorm");
const rezervari_entity_1 = require("../../rezervari/entities/rezervari.entity");
let Cabane = class Cabane {
    id;
    nume;
    pret;
    imagineUrl;
    rezervari;
};
exports.Cabane = Cabane;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Cabane.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Cabane.prototype, "nume", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Cabane.prototype, "pret", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Cabane.prototype, "imagineUrl", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => rezervari_entity_1.Rezervare, (rezervare) => rezervare.cabana),
    __metadata("design:type", Array)
], Cabane.prototype, "rezervari", void 0);
exports.Cabane = Cabane = __decorate([
    (0, typeorm_1.Entity)()
], Cabane);
//# sourceMappingURL=cabane.entity.js.map