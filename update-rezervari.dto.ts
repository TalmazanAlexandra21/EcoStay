import { PartialType } from '@nestjs/mapped-types';
import { CreateRezervariDto } from './create-rezervari.dto';

export class UpdateRezervariDto extends PartialType(CreateRezervariDto) {}
