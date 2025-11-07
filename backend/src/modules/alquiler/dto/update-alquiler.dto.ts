import { PartialType } from '@nestjs/mapped-types';
import { CreateAlquilerDto } from './create-alquiler.dto';

export class UpdateAlquilerDto extends PartialType(CreateAlquilerDto) {}

