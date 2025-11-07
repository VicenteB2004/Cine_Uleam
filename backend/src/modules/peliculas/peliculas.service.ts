import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Peliculas } from './peliculas.entity';
import { CreatePeliculaDto } from './dto/create-pelicula.dto';
import { UpdatePeliculaDto } from './dto/update-pelicula.dto';

@Injectable()
export class PeliculasService {
  constructor(
    @InjectRepository(Peliculas)
    private readonly peliculasRepo: Repository<Peliculas>,
  ) {}

  async create(dto: CreatePeliculaDto): Promise<Peliculas> {
    const pelicula = this.peliculasRepo.create(dto);
    return this.peliculasRepo.save(pelicula);
  }

  async findAll(): Promise<Peliculas[]> {
    return this.peliculasRepo.find({
      order: { creado_en: 'DESC' },
    });
  }

  async findOne(id: string): Promise<Peliculas> {
    const pelicula = await this.peliculasRepo.findOne({ where: { id } });
    if (!pelicula) {
      throw new NotFoundException(`Película con ID ${id} no encontrada`);
    }
    return pelicula;
  }

  async update(id: string, dto: UpdatePeliculaDto): Promise<Peliculas> {
    const pelicula = await this.findOne(id);
    Object.assign(pelicula, dto);
    return this.peliculasRepo.save(pelicula);
  }

  async remove(id: string): Promise<void> {
    const pelicula = await this.findOne(id);
    await this.peliculasRepo.remove(pelicula);
  }
}
