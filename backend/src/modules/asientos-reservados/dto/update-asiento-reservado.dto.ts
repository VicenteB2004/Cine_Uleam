import { PartialType } from '@nestjs/mapped-types';
import { CreateAsientoReservadoDto } from './create-asiento-reservado.dto';

export class UpdateAsientoReservadoDto extends PartialType(CreateAsientoReservadoDto) {}
