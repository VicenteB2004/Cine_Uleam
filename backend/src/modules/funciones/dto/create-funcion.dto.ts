import { IsUUID, IsDateString, IsNumber, IsOptional, IsString, IsBoolean, IsIn } from 'class-validator';
  
  export class CreateFuncionDto {
    @IsUUID()
    pelicula_id: string;
  
    @IsUUID()
    sala_id: string;
  
    @IsDateString()
    fecha_funcion: string;
  
    @IsString()
    hora_funcion: string;
  
    @IsNumber()
    precio: number;
  
    @IsNumber()
    asientos_disponibles: number;
  
    @IsOptional()
    @IsIn(['programada', 'en_curso', 'finalizada', 'cancelada'])
    estado?: 'programada' | 'en_curso' | 'finalizada' | 'cancelada';
  
    @IsOptional()
    @IsBoolean()
    es_estreno?: boolean;
  
    @IsOptional()
    @IsBoolean()
    es_evento_especial?: boolean;
  
    @IsOptional()
    @IsString()
    notas_especiales?: string;
  }
  