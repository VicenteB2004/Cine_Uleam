import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './Auth/auth.module';
import { QrcodeModule } from './modules/qrcode/qrcode.module';
import { PeliculasModule } from './modules/peliculas/peliculas.module';
import { ReservasModule } from './modules/reservas/reservas.module';
import { SalasModule } from './modules/sala/sala.module';
import { AsientosModule } from './modules/asientos/asientos.module';
import { AsientosReservadosModule } from './modules/asientos-reservados/asientos-reservados.module';
import { FuncionesModule } from './modules/funciones/funciones.module';
import { NotificacionesModule } from './modules/notificaciones/notificaciones.module';

@Module({
  imports: [
    ConfigModule.forRoot({}),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.SUPABASE_URL,
      autoLoadEntities: true,
      synchronize: false,
      logging: true,
    }),
    UsersModule,
    AuthModule,
    QrcodeModule,
    PeliculasModule,
    ReservasModule,
    SalasModule,
    AsientosModule,
    AsientosReservadosModule,
    FuncionesModule,
    NotificacionesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
