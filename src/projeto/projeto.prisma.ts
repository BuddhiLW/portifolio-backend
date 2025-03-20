import { Projeto, Nivel, Tipo } from '@core';
import { Injectable } from '@nestjs/common';
import { PrismaProvider } from 'src/db/prisma.provider';

@Injectable()
export class ProjetoProvider {
  constructor(private readonly prisma: PrismaProvider) {}

  async findAll(): Promise<Projeto[]> {
    const projetos = await this.prisma.projeto.findMany({
      include: {
        tecnologias: true
      }
    });

    return projetos.map(projeto => ({
      ...projeto,
      nivel: Object.values(Nivel)[projeto.nivel] as Nivel,
      tipo: projeto.tipo as Tipo
    }));
  }

  async findById(id: number): Promise<Projeto | null> {
    const projeto = await this.prisma.projeto.findUnique({
      where: { id },
      include: { tecnologias: true }
    });

    if (!projeto) {
      return null;
    }

    return {
      ...projeto,
      nivel: Object.values(Nivel)[projeto.nivel] as Nivel,
      tipo: projeto.tipo as Tipo
    };
  }
}