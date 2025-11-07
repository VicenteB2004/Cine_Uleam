import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"; 

@Entity() 

export class Users { 
    
    @PrimaryGeneratedColumn('uuid') 
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
    
    @Column({ name: 'esta_activo', default: true })
    activo: boolean; 
    
    @Column({ select: false }) // ocultamos el password en consultas normales
    password: string; 
    
    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }) 
    registro: Date; 
    
    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }) 
    actualizacion: Date;

}