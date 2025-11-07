import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AsientosReservadosService } from './asientos-reservados.service';
import { AsientosReservadosController } from './asientos-reservados.controller';
import { AsientoReservado } from './asientos-reservados.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AsientoReservado])],
  controllers: [AsientosReservadosController],
  providers: [AsientosReservadosService],
})
export class AsientosReservadosModule {}
