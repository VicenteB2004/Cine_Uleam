import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Sala } from '../sala/sala.entity';
  
  @Entity('asientos')
  export class Asiento {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column()
    sala_id: string;
  
    @ManyToOne(() => Sala, (sala) => sala.id, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'sala_id' })
    sala: Sala;
  
    @Column({ type: 'text' })
    fila: string;
  
    @Column({ type: 'int' })
    numero_asiento: number;
  
    @Column({ type: 'boolean', default: true })
    esta_disponible: boolean;
  
    @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    creado_en: Date;
  }
  