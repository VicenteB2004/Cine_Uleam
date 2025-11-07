import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/modules/users/users.service';
import { LoginDto } from './dto/login.dto';

import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(
        private readonly usersService: UsersService,
        private readonly jwtService: JwtService,
    ) { }

    async login(loginDto: LoginDto) {
        const { correo, password } = loginDto;

        // Buscar el usuario incluyendo el password
        const user = await this.usersService.findByCorreo(correo);
        if (!user) {
            throw new UnauthorizedException('Correo o contraseña incorrectos');
        }

        // Comparar la contraseña
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            throw new UnauthorizedException('Correo o contraseña incorrectos');
        }

        // Generar el token JWT
        const payload = { sub: user.id, correo: user.correo, rol: user.rol };
        const token = this.jwtService.sign(payload);

        return {
            message: 'Login exitoso',
            access_token: token,
        };
    }
}
