import { IsString, IsBoolean, IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUsersDto {
    @IsEmail()
    correo: string;

    @IsString()
    @IsNotEmpty()
    nombres: string;

    @IsString()
    @IsNotEmpty()
    apellidos: string;

    @IsString()
    @IsNotEmpty()
    cedula: string;

    @IsString()
    rol: string;

    @IsBoolean()
    activo: boolean;

    @IsString()
    password: string;
}
