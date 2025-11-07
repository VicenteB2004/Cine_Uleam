import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';
  
  @Entity('reservas')
  export class Reserva {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column({ type: 'uuid' })
    usuario_id: string;
  
    @Column({ type: 'uuid' })
    funcion_id: string;
  
    @Column({ type: 'text', unique: true })
    codigo_qr: string;
  
    @Column({ type: 'text', nullable: true })
    url_codigo_qr?: string;
  
    @Column({ type: 'int', default: 1 })
    asientos_reservados: number;
  
    @Column({ type: 'decimal', precision: 10, scale: 2, default: 0 })
    precio_total: number;
  
    @Column({ type: 'text', default: 'pendiente' })
    estado: string;
    
    @Column({ type: 'boolean', default: false })
    ingreso_registrado: boolean;
  
    @Column({ type: 'timestamptz', nullable: true })
    fecha_ingreso?: Date;
  
    @Column({ type: 'uuid', nullable: true })
    registrado_por?: string;
  
    @Column({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    reservado_en: Date;
  
    @Column({ type: 'timestamptz', nullable: true })
    expira_en?: Date;
  
    @Column({ type: 'timestamptz', nullable: true })
    cancelado_en?: Date;
  
    @CreateDateColumn({ 
      type: 'timestamptz',
      default: () => 'CURRENT_TIMESTAMP',
    })
    creado_en: Date;
  
    @UpdateDateColumn({
      type: 'timestamptz',
      default: () => 'CURRENT_TIMESTAMP',
    })
    actualizado_en: Date;
  }
  