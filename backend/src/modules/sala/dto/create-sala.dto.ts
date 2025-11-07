import { IsString, IsInt, IsOptional, IsBoolean, Min } from 'class-validator';

export class CreateSalaDto {
  @IsString()
  nombre: string;

  @IsInt()
  @Min(1)
  capacidad: number;

  @IsOptional()
  @IsBoolean()
  esta_activa?: boolean;

  @IsOptional()
  @IsString()
  descripcion?: string;
}
