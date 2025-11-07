import { IsUUID } from 'class-validator';

export class CreateAsientoReservadoDto {
  @IsUUID()
  reserva_id: string;

  @IsUUID()
  asiento_id: string;
}
