import { IsUUID, IsString, IsInt, IsBoolean, IsOptional } from 'class-validator';

export class CreateAsientoDto {
  @IsUUID()
  sala_id: string;

  @IsString()
  fila: string;

  @IsInt()
  numero_asiento: number;

  @IsOptional()
  @IsBoolean()
  esta_disponible?: boolean;
}
