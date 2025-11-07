import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Alquiler } from './alquiler.entity';
import { Repository } from 'typeorm';
import { CreateAlquilerDto } from './dto/create-alquiler.dto';
import { UpdateAlquilerDto } from './dto/update-alquiler.dto';

@Injectable()
export class AlquilerService {
    constructor(
        @InjectRepository(Alquiler)
        private readonly alquilerRepo: Repository<Alquiler>,
    ) { }

    async create(createAlquilerDto: CreateAlquilerDto): Promise<Alquiler> {
        const alquiler = this.alquilerRepo.create(createAlquilerDto);
        return await this.alquilerRepo.save(alquiler);
    }

    async findAll(): Promise<Alquiler[]> {
        return await this.alquilerRepo.find();
    }

    async findOne(id: number): Promise<Alquiler> {
        const alquiler = await this.alquilerRepo.findOne({ where: { id } });
        if (!alquiler) throw new NotFoundException(`Alquiler con id ${id} no encontrado`);
        return alquiler;
    }

    async update(id: number, updateAlquilerDto: UpdateAlquilerDto): Promise<Alquiler> {
        const alquiler = await this.findOne(id);
        Object.assign(alquiler, updateAlquilerDto);
        return await this.alquilerRepo.save(alquiler);
    }

    async remove(id: number): Promise<void> {
        const alquiler = await this.findOne(id);
        await this.alquilerRepo.remove(alquiler);
    }
}
