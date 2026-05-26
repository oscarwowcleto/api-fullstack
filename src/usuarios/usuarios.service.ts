import { Injectable } from '@nestjs/common';

@Injectable()
export class UsuariosService {
  private usuarios = [
    { id: 1, nombre: 'Oscar Cleto', email: 'oscar@gmail.com', edad: 25 },
    { id: 2, nombre: 'Maria Lopez', email: 'maria@gmail.com', edad: 30 },
  ];

  findAll() {
    return this.usuarios;
  }

  findOne(id: number) {
    return this.usuarios.find(u => u.id === id);
  }

  create(data: any) {
    const nuevo = { id: this.usuarios.length + 1, ...data };
    this.usuarios.push(nuevo);
    return nuevo;
  }

  update(id: number, data: any) {
    const index = this.usuarios.findIndex(u => u.id === id);
    this.usuarios[index] = { ...this.usuarios[index], ...data };
    return this.usuarios[index];
  }

  remove(id: number) {
    this.usuarios = this.usuarios.filter(u => u.id !== id);
    return { message: `Usuario ${id} eliminado` };
  }
}