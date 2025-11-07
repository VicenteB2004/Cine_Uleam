import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FuncionesService } from './funciones.service';
import { CreateFuncionDto } from './dto/create-funcion.dto';
import { UpdateFuncionDto } from './dto/update-funcion.dto';

@Controller('funciones')
export class FuncionesController {
  constructor(private readonly funcionesService: FuncionesService) {}

  @Post()
  create(@Body() createFuncionDto: CreateFuncionDto) {
    return this.funcionesService.create(createFuncionDto);
  }

  @Get()
  findAll() {
    return this.funcionesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.funcionesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFuncionDto: UpdateFuncionDto) {
    return this.funcionesService.update(id, updateFuncionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.funcionesService.remove(id);
  }
}
