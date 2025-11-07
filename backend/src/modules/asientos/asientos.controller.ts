  import { Controller, Get, Post, Patch, Delete, Param, Body } from '@nestjs/common';
  import { AsientosService } from './asientos.service';
  import { CreateAsientoDto } from './dto/create-asiento.dto';
  import { UpdateAsientoDto } from './dto/update-asiento.dto';
  
  @Controller('asientos')
  export class AsientosController {
    constructor(private readonly asientosService: AsientosService) {}
  
    @Post()
    create(@Body() dto: CreateAsientoDto) {
      return this.asientosService.create(dto);
    }
  
    @Get()
    findAll() {
      return this.asientosService.findAll();
    }
  
    @Get(':id')
    findOne(@Param('id') id: string) {
      return this.asientosService.findOne(id);
    }
  
    @Patch(':id')
    update(@Param('id') id: string, @Body() dto: UpdateAsientoDto) {
      return this.asientosService.update(id, dto);
    }
  
    @Delete(':id')
    remove(@Param('id') id: string) {
      return this.asientosService.remove(id);
    }
  }
  