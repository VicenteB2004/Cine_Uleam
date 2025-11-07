import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm';
import { PeliculasModule } from './modules/peliculas/peliculas.module';
import { ReservasModule } from './modules/reservas/reservas.module';
import { SalasModule } from './modules/sala/sala.module';
import { AsientosModule } from './modules/asientos/asientos.module';
import { AsientosReservadosModule } from './modules/asientos-reservados/asientos-reservados.module';

@Module({
  imports: [
    ConfigModule.forRoot({}),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.SUPABASE_URL,
      autoLoadEntities: true,
      synchronize: true,
    }),
    UsersModule,
    PeliculasModule,
    ReservasModule,
    SalasModule,
    AsientosModule,
    AsientosReservadosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
