"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CabaneModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const cabane_controller_1 = require("./cabane.controller");
const cabane_service_1 = require("./cabane.service");
const cabane_entity_1 = require("./entities/cabane.entity");
let CabaneModule = class CabaneModule {
};
exports.CabaneModule = CabaneModule;
exports.CabaneModule = CabaneModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([cabane_entity_1.Cabane])],
        controllers: [cabane_controller_1.CabaneController],
        providers: [cabane_service_1.CabaneService],
    })
], CabaneModule);
//# sourceMappingURL=cabane.module.js.map