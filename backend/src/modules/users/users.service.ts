import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from './users.entity';
import { Repository } from 'typeorm';
import { CreateUsersDto } from './dto/create-users.dto/create-users.dto';
import { UpdateUsersDto } from './dto/update-users.dto/update-users.dto';

import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(Users)
        private usersRepository: Repository<Users>,
    ) { }

    async createUser(createUserDto: CreateUsersDto): Promise<Users> {
        const hashedPassword = await bcrypt.hash(createUserDto.password, 10); // 10 = salt rounds
        const user = this.usersRepository.create({
            ...createUserDto,
            password: hashedPassword,
        });
        return await this.usersRepository.save(user);
    }

    async findAll(): Promise<Users[]> {
        return await this.usersRepository.find();
    }

    async findOne(id: string): Promise<Users> {
        const user = await this.usersRepository.findOneBy({ id });
        if (!user) throw new NotFoundException(`Usuario con id ${id} no encontrado`);
        return user;
    }

    async findByCorreo(correo: string): Promise<Users | null> {
        return this.usersRepository.findOne({
            where: { correo },
            select: ['id', 'correo', 'password', 'rol', 'activo'],
        });
    }

    async update(id: string, updateUsersDto: UpdateUsersDto): Promise<Users> {
        const user = await this.findOne(id);

        if (updateUsersDto.password) {
            updateUsersDto.password = await bcrypt.hash(updateUsersDto.password, 10);
        }

        Object.assign(user, updateUsersDto);
        return this.usersRepository.save(user);
    }

    async remove(id: string): Promise<void> {
        const user = await this.findOne(id);
        await this.usersRepository.remove(user);
    }
}
