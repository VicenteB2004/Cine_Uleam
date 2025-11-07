import {
    Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn,
  } from 'typeorm';
  
  @Entity('peliculas')
  export class Peliculas {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column({ type: 'text' })
    titulo: string;
  
    @Column({ type: 'text', nullable: true })
    titulo_original?: string;
  
    @Column({ type: 'text', nullable: true })
    sinopsis?: string;
  
    @Column({ type: 'int' })
    duracion_minutos: number;
  
    @Column({ type: 'int', nullable: true })
    anio_estreno?: number;
  
    @Column({ type: 'text', nullable: true })
    url_poster?: string;
  
    @Column({ type: 'text', nullable: true })
    url_trailer?: string;
  
    @Column({ type: 'text', nullable: true })
    clasificacion?: 'ATP' | 'PG' | 'PG-13' | 'R' | 'NR';
  
    @Column({ type: 'text', array: true })
    generos: string[];
  
    @Column({ type: 'text', default: 'Español' })
    idioma: string;
  
    @Column({ type: 'text', nullable: true })
    subtitulos?: string;
  
    // Métricas para películas destacadas
    @Column({ type: 'int', default: 0 })
    total_vistas: number;
  
    @Column({ type: 'decimal', precision: 3, scale: 2, default: 0 })
    calificacion_promedio: number;
  
    @Column({ type: 'int', default: 0 })
    total_calificaciones: number;
  
    @Column({ type: 'decimal', precision: 10, scale: 2, default: 0 })
    puntaje_popularidad: number;
  
    // Control de estado
    @Column({ type: 'text', default: 'proximamente' })
    estado: 'proximamente' | 'en_cartelera' | 'finalizada';
  
    @Column({ type: 'boolean', default: false })
    es_destacada: boolean;
  
    @Column({ type: 'int', nullable: true })
    orden_destacada?: number;
  
    // Fechas
    @Column({ type: 'date', nullable: true })
    fecha_estreno?: string;
  
    @Column({ type: 'date', nullable: true })
    fecha_fin?: string;
  
    @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    creado_en: Date;
  
    @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    actualizado_en: Date;
  }
  