import { IsUUID, IsString, IsOptional, IsBoolean, IsIn } from 'class-validator';

export class CreateNotificacionDto {
  @IsUUID()
  usuario_id: string;

  @IsString()
  titulo: string;

  @IsString()
  mensaje: string;

  @IsOptional()
  tipo?: 'info' | 'exito' | 'advertencia' | 'recordatorio' | 'promocion';

  @IsOptional()
  @IsUUID()
  reserva_relacionada_id?: string;

  @IsOptional()
  @IsBoolean()
  esta_leida?: boolean;
}
