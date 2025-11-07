import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"; 

@Entity('Usuarios') 

export class Users { 
    
    @PrimaryGeneratedColumn() 
    id: string; 
    
    @Column({ unique: true }) 
    correo: string; 
    
    @Column({ length: 100}) 
    nombres: string; 
    
    @Column({ length: 100}) 
    apellidos: string; 
    
    @Column({ unique: true }) 
    cedula: string; 
    
    @Column() 
    rol: string; 
    
    @Column() 
    activo: boolean; 
    
    @Column({ select: false }) // ocultamos el password en consultas normales
    password: string; 
    
    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }) 
    registro: Date; 
    
    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }) 
    actualizacion: Date;

}