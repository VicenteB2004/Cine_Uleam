import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AsientoReservado } from './asientos-reservados.entity';
import { CreateAsientoReservadoDto } from './dto/create-asiento-reservado.dto';
import { UpdateAsientoReservadoDto } from './dto/update-asiento-reservado.dto';

@Injectable()
export class AsientosReservadosService {
  constructor(
    @InjectRepository(AsientoReservado)
    private readonly asientoReservadoRepository: Repository<AsientoReservado>,
  ) {}

  create(createDto: CreateAsientoReservadoDto) {
    const nuevo = this.asientoReservadoRepository.create({
      reserva: { id: createDto.reserva_id },
      asiento: { id: createDto.asiento_id },
    });
    return this.asientoReservadoRepository.save(nuevo);
  }

  findAll() {
    return this.asientoReservadoRepository.find({
      relations: ['reserva', 'asiento'],
    });
  }

  findOne(id: string) {
    return this.asientoReservadoRepository.findOne({
      where: { id },
      relations: ['reserva', 'asiento'],
    });
  }

  update(id: string, updateDto: UpdateAsientoReservadoDto) {
    return this.asientoReservadoRepository.update(id, {
      reserva: updateDto.reserva_id ? { id: updateDto.reserva_id } : undefined,
      asiento: updateDto.asiento_id ? { id: updateDto.asiento_id } : undefined,
    });
  }

  remove(id: string) {
    return this.asientoReservadoRepository.delete(id);
  }
}
