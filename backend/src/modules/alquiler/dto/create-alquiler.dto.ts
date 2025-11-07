import { IsDateString, IsEmail, IsNotEmpty, IsString, IsNumber, IsOptional } from "class-validator";

export class CreateAlquilerDto {
    @IsDateString()
    @IsNotEmpty()
    fecha_inicio: string;

    @IsDateString()
    @IsNotEmpty()
    fecha_fin: string;

    @IsString()
    @IsNotEmpty()
    prestatario: string;

    @IsString()
    @IsNotEmpty()
    telefono_prestatario: string;

    @IsEmail()
    @IsNotEmpty()
    email_prestatario: string;

    @IsString()
    @IsNotEmpty()
    arrendatario: string;

    @IsString()
    @IsNotEmpty()
    telefono_arrendatario: string;

    @IsEmail()
    @IsNotEmpty()
    email_arrendatario: string;

    @IsNumber()
    @IsNotEmpty()
    valor: number;

    @IsString()
    @IsOptional()
    descripcion?: string;
}
