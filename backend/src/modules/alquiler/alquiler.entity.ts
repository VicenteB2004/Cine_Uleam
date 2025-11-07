import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';
  
  @Entity('alquiler')
  export class Alquiler {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    fecha_inicio: Date;

    @Column()
    fecha_fin: Date;
  
    @Column()
    prestatario: string;

    @Column()
    telefono_prestatario: string;

    @Column()
    email_prestatario: string;
  
    @Column()
    arrendatario: string;

    @Column()
    telefono_arrendatario: string;

    @Column()
    email_arrendatario: string;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    valor: number;

    @Column({ nullable: true })
    descripcion?: string;
  
    @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    creado_en: Date;
  }
  