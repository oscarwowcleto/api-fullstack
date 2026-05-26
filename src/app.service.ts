import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Mi primera API Full Stack con NestJS :) 🚀';
  }
}
