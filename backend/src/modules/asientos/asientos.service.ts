import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Asiento } from './asiento.entity';
import { CreateAsientoDto } from './dto/create-asiento.dto';
import { UpdateAsientoDto } from './dto/update-asiento.dto';

@Injectable()
export class AsientosService {
  constructor(
    @InjectRepository(Asiento)
    private readonly asientoRepo: Repository<Asiento>,
  ) {}

  async create(dto: CreateAsientoDto): Promise<Asiento> {
    const asiento = this.asientoRepo.create(dto);
    return this.asientoRepo.save(asiento);
  }

  async findAll(): Promise<Asiento[]> {
    return this.asientoRepo.find({ relations: ['sala'] });
  }

  async findOne(id: string): Promise<Asiento> {
    const asiento = await this.asientoRepo.findOne({
      where: { id },
      relations: ['sala'],
    });
    if (!asiento) throw new NotFoundException('Asiento no encontrado');
    return asiento;
  }

  async update(id: string, dto: UpdateAsientoDto): Promise<Asiento> {
    const asiento = await this.findOne(id);
    Object.assign(asiento, dto);
    return this.asientoRepo.save(asiento);
  }

  async remove(id: string): Promise<void> {
    const asiento = await this.findOne(id);
    await this.asientoRepo.remove(asiento);
  }
}
