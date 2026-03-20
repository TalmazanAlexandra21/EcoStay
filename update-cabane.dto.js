"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCabaneDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_cabane_dto_1 = require("./create-cabane.dto");
class UpdateCabaneDto extends (0, mapped_types_1.PartialType)(create_cabane_dto_1.CreateCabaneDto) {
}
exports.UpdateCabaneDto = UpdateCabaneDto;
//# sourceMappingURL=update-cabane.dto.js.map