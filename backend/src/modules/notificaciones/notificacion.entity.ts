import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Users } from '../users/users.entity';
import { Reserva } from '../reservas/reserva.entity';

@Entity('notificaciones')
export class Notificacion {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Users, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'usuario_id' })
  usuario: Users;

  @Column({ type: 'text' })
  titulo: string;

  @Column({ type: 'text' })
  mensaje: string;

  @Column({
    type: 'enum',
    enum: ['info', 'exito', 'advertencia', 'recordatorio', 'promocion'],
    default: 'info',
  })
  tipo: 'info' | 'exito' | 'advertencia' | 'recordatorio' | 'promocion';

  @ManyToOne(() => Reserva, { onDelete: 'SET NULL', nullable: true })
  @JoinColumn({ name: 'reserva_relacionada_id' })
  reserva_relacionada?: Reserva;

  @Column({ type: 'boolean', default: false })
  esta_leida: boolean;

  @Column({ type: 'timestamptz', default: () => 'NOW()' })
  creado_en: Date;
}