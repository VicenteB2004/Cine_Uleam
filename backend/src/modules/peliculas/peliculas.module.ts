import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Peliculas } from './peliculas.entity';
import { PeliculasService } from './peliculas.service';
import { PeliculasController } from './peliculas.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Peliculas])],
  providers: [PeliculasService],
  controllers: [PeliculasController],
})
export class PeliculasModule {}
