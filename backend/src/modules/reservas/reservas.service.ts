import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Reserva } from './reserva.entity';
import { CreateReservaDto } from './dto/create-reserva.dto';
import { UpdateReservaDto } from './dto/update-reserva.dto';

@Injectable()
export class ReservasService {
  constructor(
    @InjectRepository(Reserva)
    private reservasRepo: Repository<Reserva>,
  ) {}

  async create(data: CreateReservaDto): Promise<Reserva> {
    const reserva = this.reservasRepo.create(data);
    return await this.reservasRepo.save(reserva);
  }

  async findAll(): Promise<Reserva[]> {
    return this.reservasRepo.find();
  }

  async findOne(id: string): Promise<Reserva> {
    const reserva = await this.reservasRepo.findOne({ where: { id } });
    if (!reserva) throw new NotFoundException('Reserva no encontrada');
    return reserva;
  }

  async update(id: string, data: UpdateReservaDto): Promise<Reserva> {
    const reserva = await this.findOne(id);
    Object.assign(reserva, data);
    return this.reservasRepo.save(reserva);
  }

  async remove(id: string): Promise<void> {
    const reserva = await this.findOne(id);
    await this.reservasRepo.remove(reserva);
  }
}
