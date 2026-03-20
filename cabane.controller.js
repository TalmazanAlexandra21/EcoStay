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
exports.CabaneController = void 0;
const common_1 = require("@nestjs/common");
const cabane_service_1 = require("./cabane.service");
let CabaneController = class CabaneController {
    cabaneService;
    constructor(cabaneService) {
        this.cabaneService = cabaneService;
    }
    async findAll() {
        return this.cabaneService.findAll();
    }
};
exports.CabaneController = CabaneController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CabaneController.prototype, "findAll", null);
exports.CabaneController = CabaneController = __decorate([
    (0, common_1.Controller)('cabane'),
    __metadata("design:paramtypes", [cabane_service_1.CabaneService])
], CabaneController);
//# sourceMappingURL=cabane.controller.js.map