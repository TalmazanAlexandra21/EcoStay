import { PartialType } from '@nestjs/mapped-types';
import { CreateCabaneDto } from './create-cabane.dto';

export class UpdateCabaneDto extends PartialType(CreateCabaneDto) {}
