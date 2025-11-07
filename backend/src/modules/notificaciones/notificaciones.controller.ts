import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NotificacionesService } from './notificaciones.service';
import { CreateNotificacionDto } from './dto/create-notificacion.dto';
import { UpdateNotificacionDto } from './dto/update-notificacion.dto';

@Controller('notificaciones')
export class NotificacionesController {
  constructor(private readonly notificacionesService: NotificacionesService) {}

  @Post()
  create(@Body() dto: CreateNotificacionDto) {
    return this.notificacionesService.create(dto);
  }

  @Get()
  findAll() {
    return this.notificacionesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.notificacionesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateNotificacionDto) {
    return this.notificacionesService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.notificacionesService.remove(id);
  }
}
