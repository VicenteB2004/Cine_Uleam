import { PartialType } from '@nestjs/mapped-types';
import { CreateAsientoDto } from './create-asiento.dto';

export class UpdateAsientoDto extends PartialType(CreateAsientoDto) {}
