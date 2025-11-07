import { IsUUID, IsNotEmpty, IsInt, IsOptional, IsString, IsNumber, IsBoolean, IsIn, IsDateString } from 'class-validator';
  
  export class CreateReservaDto {
    @IsUUID()
    @IsNotEmpty()
    usuario_id: string;
  
    @IsUUID()
    @IsNotEmpty()
    funcion_id: string;
  
    @IsString()
    @IsNotEmpty()
    codigo_qr: string;
  
    @IsString()
    @IsOptional()
    url_codigo_qr?: string;
  
    @IsInt()
    @IsOptional()
    asientos_reservados?: number;
  
    @IsNumber()
    @IsOptional()
    precio_total?: number;
  
    @IsIn(['pendiente', 'confirmada', 'cancelada', 'usada', 'expirada'])
    @IsOptional()
    estado?: string;
  
    @IsBoolean()
    @IsOptional()
    ingreso_registrado?: boolean;
  
    @IsDateString()
    @IsOptional()
    fecha_ingreso?: Date;
  
    @IsUUID()
    @IsOptional()
    registrado_por?: string;
  
    @IsDateString()
    @IsOptional()
    expira_en?: Date;
  
    @IsDateString()
    @IsOptional()
    cancelado_en?: Date;
  }
  