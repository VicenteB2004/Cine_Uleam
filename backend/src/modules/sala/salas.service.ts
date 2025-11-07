import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Sala } from './sala.entity';
import { CreateSalaDto } from './dto/create-sala.dto';
import { UpdateSalaDto } from './dto/update-sala.dto';

@Injectable()
export class SalasService {
  constructor(
    @InjectRepository(Sala)
    private readonly salaRepository: Repository<Sala>,
  ) {}

  create(createSalaDto: CreateSalaDto) {
    const sala = this.salaRepository.create(createSalaDto);
    return this.salaRepository.save(sala);
  }

  findAll() {
    return this.salaRepository.find();
  }

  async findOne(id: string) {
    const sala = await this.salaRepository.findOneBy({ id });
    if (!sala) throw new NotFoundException(`Sala con ID ${id} no encontrada`);
    return sala;
  }

  async update(id: string, updateSalaDto: UpdateSalaDto) {
    const sala = await this.findOne(id);
    Object.assign(sala, updateSalaDto);
    return this.salaRepository.save(sala);
  }

  async remove(id: string) {
    const sala = await this.findOne(id);
    return this.salaRepository.remove(sala);
  }
}
