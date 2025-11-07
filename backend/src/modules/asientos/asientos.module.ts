import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Asiento } from './asiento.entity';
import { AsientosService } from './asientos.service';
import { AsientosController } from './asientos.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Asiento])],
  controllers: [AsientosController],
  providers: [AsientosService],
})
export class AsientosModule {}
