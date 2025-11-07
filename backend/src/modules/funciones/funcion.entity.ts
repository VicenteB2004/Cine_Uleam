import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Peliculas } from '../peliculas/peliculas.entity';
import { Sala } from '../sala/sala.entity';

@Entity('funciones')
export class Funcion {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Peliculas, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'pelicula_id' })
  pelicula: Peliculas;

  @ManyToOne(() => Sala, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'sala_id' })
  sala: Sala;

  @Column({ type: 'date' })
  fecha_funcion: Date;

  @Column({ type: 'time' })
  hora_funcion: string;

  @Column({ type: 'decimal', precision: 10, scale: 2, default: 0.0 })
  precio: number;

  @Column({ type: 'int' })
  asientos_disponibles: number;

  @Column({
    type: 'text',
    default: 'programada',
  })
  estado: 'programada' | 'en_curso' | 'finalizada' | 'cancelada';

  @Column({ type: 'boolean', default: false })
  es_estreno: boolean;

  @Column({ type: 'boolean', default: false })
  es_evento_especial: boolean;

  @Column({ type: 'text', nullable: true })
  notas_especiales?: string;

  @Column({ type: 'timestamptz', default: () => 'NOW()' })
  creado_en: Date;

  @Column({ type: 'timestamptz', default: () => 'NOW()' })
  actualizado_en: Date;
}
