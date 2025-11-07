import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Notificacion } from './notificacion.entity';
import { CreateNotificacionDto } from './dto/create-notificacion.dto';
import { UpdateNotificacionDto } from './dto/update-notificacion.dto';

@Injectable()
export class NotificacionesService {
  constructor(
    @InjectRepository(Notificacion)
    private readonly notificacionRepo: Repository<Notificacion>,
  ) {}

  async create(dto: CreateNotificacionDto) {
    const nueva = this.notificacionRepo.create(dto);
    return this.notificacionRepo.save(nueva);
  }

  async findAll() {
    return this.notificacionRepo.find({
      order: { creado_en: 'DESC' },
    });
  }

  async findOne(id: string) {
    const notificacion = await this.notificacionRepo.findOne({ where: { id } });
    if (!notificacion) throw new NotFoundException('Notificación no encontrada');
    return notificacion;
  }

  async update(id: string, dto: UpdateNotificacionDto) {
    await this.findOne(id);
    await this.notificacionRepo.update(id, dto);
    return this.findOne(id);
  }

  async remove(id: string) {
    const notificacion = await this.findOne(id);
    return this.notificacionRepo.remove(notificacion);
  }
}
