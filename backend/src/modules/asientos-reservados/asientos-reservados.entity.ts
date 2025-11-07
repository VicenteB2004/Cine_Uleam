import {  Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn } from 'typeorm';
  import { Reserva } from '../reservas/reserva.entity';
  import { Asiento } from '../asientos/asiento.entity';
  
  @Entity({ name: 'asientos_reservados' })
  export class AsientoReservado {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @ManyToOne(() => Reserva, (reserva) => reserva.id, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'reserva_id' })
    reserva: Reserva;
  
    @ManyToOne(() => Asiento, (asiento) => asiento.id, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'asiento_id' })
    asiento: Asiento;
  
    @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    creado_en: Date;
  }
  