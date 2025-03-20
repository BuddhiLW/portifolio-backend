import { Tecnologia } from '@core';
import { Injectable } from '@nestjs/common';
import { PrismaProvider } from 'src/db/prisma.provider';

@Injectable()
export class TecnologiaProvider {
  constructor(private readonly prisma: PrismaProvider) {}

  async findAll(): Promise<Tecnologia[]> {
    return this.prisma.tecnologia.findMany();
  }

  async findDestaques(): Promise<Tecnologia[]> {
    return this.prisma.tecnologia.findMany({
      where: {
        destaque: true,
      },
    });
  }
}
