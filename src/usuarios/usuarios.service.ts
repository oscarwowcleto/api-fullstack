/* eslint-disable */
import { Injectable } from '@nestjs/common';

interface Usuario {
  id: number;
  nombre: string;
  email: string;
  edad: number;
}

@Injectable()
export class UsuariosService {
  private usuarios: Usuario[] = [
    { id: 1, nombre: 'Oscar Cleto', email: 'oscar@gmail.com', edad: 25 },
    { id: 2, nombre: 'Maria Lopez', email: 'maria@gmail.com', edad: 30 },
  ];

  findAll(): Usuario[] {
    return this.usuarios;
  }

  findOne(id: number): Usuario | undefined {
    return this.usuarios.find(usuario => usuario.id === id);
  }

  create(data: Omit<Usuario, 'id'>): Usuario {
    const nuevo: Usuario = { id: this.usuarios.length + 1, ...data };
    this.usuarios.push(nuevo);
    return nuevo;
  }

  update(id: number, data: Partial<Usuario>): Usuario {
    const index = this.usuarios.findIndex(usuario => usuario.id === id);
    this.usuarios[index] = { ...this.usuarios[index], ...data };
    return this.usuarios[index];
  }

  remove(id: number): { message: string } {
    this.usuarios = this.usuarios.filter(usuario => usuario.id !== id);
    return { message: `Usuario ${id} eliminado` };
  }
}