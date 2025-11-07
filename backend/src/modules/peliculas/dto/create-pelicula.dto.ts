import { IsString, IsInt, IsOptional, IsArray, IsBoolean, IsNumber } from 'class-validator';
  
  export class CreatePeliculaDto {
    @IsString()
    titulo: string;
   
    @IsOptional()
    @IsString()
    titulo_original?: string;
  
    @IsOptional()
    @IsString()
    sinopsis?: string;
  
    @IsInt()
    duracion_minutos: number;
  
    @IsOptional()
    @IsInt()
    anio_estreno?: number;
  
    @IsOptional()
    @IsString()
    url_poster?: string;
  
    @IsOptional()
    @IsString()
    url_trailer?: string;
  
    @IsOptional()
    @IsString()
    clasificacion?: 'ATP' | 'PG' | 'PG-13' | 'R' | 'NR';
  
    @IsArray()
    generos: string[];
  
    @IsOptional()
    @IsString()
    idioma?: string;
  
    @IsOptional()
    @IsString()
    subtitulos?: string;
  
    @IsOptional()
    @IsBoolean()
    es_destacada?: boolean;
  
    @IsOptional()
    @IsInt()
    orden_destacada?: number;
  
    @IsOptional()
    @IsString()
    fecha_estreno?: string;
  
    @IsOptional()
    @IsString()
    fecha_fin?: string;
  }
  