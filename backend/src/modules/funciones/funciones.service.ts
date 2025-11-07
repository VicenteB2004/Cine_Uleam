import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Funcion } from './funcion.entity';
import { CreateFuncionDto } from './dto/create-funcion.dto';
import { UpdateFuncionDto } from './dto/update-funcion.dto';

@Injectable()
export class FuncionesService {
  constructor(
    @InjectRepository(Funcion)
    private readonly funcionesRepository: Repository<Funcion>,
  ) {}

  async create(createFuncionDto: CreateFuncionDto) {
    const nuevaFuncion = this.funcionesRepository.create({
      ...createFuncionDto,
      pelicula: { id: createFuncionDto.pelicula_id } as any,
      sala: { id: createFuncionDto.sala_id } as any,
    });
    return await this.funcionesRepository.save(nuevaFuncion);
  }

  findAll() {
    return this.funcionesRepository.find({
      relations: ['pelicula', 'sala'],
      order: { fecha_funcion: 'ASC', hora_funcion: 'ASC' },
    });
  }

  async findOne(id: string) {
    const funcion = await this.funcionesRepository.findOne({
      where: { id },
      relations: ['pelicula', 'sala'],
    });
    if (!funcion) throw new NotFoundException(`Función con ID ${id} no encontrada`);
    return funcion;
  }

  async update(id: string, updateFuncionDto: UpdateFuncionDto) {
    const funcion = await this.findOne(id);
    Object.assign(funcion, {
      ...updateFuncionDto,
      pelicula: updateFuncionDto.pelicula_id
        ? ({ id: updateFuncionDto.pelicula_id } as any)
        : funcion.pelicula,
      sala: updateFuncionDto.sala_id
        ? ({ id: updateFuncionDto.sala_id } as any)
        : funcion.sala,
    });

    return await this.funcionesRepository.save(funcion);
  }

  async remove(id: string) {
    const funcion = await this.findOne(id);
    if (!funcion) throw new NotFoundException(`Función con ID ${id} no encontrada`);
    return await this.funcionesRepository.remove(funcion);
  }
}
