import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AsientosReservadosService } from './asientos-reservados.service';
import { CreateAsientoReservadoDto } from './dto/create-asiento-reservado.dto';
import { UpdateAsientoReservadoDto } from './dto/update-asiento-reservado.dto';

@Controller('asientos-reservados')
export class AsientosReservadosController {
  constructor(private readonly service: AsientosReservadosService) {}

  @Post()
  create(@Body() createDto: CreateAsientoReservadoDto) {
    return this.service.create(createDto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDto: UpdateAsientoReservadoDto) {
    return this.service.update(id, updateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}
