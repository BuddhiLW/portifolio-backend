import { Projeto, Nivel, Tipo } from '@core';
import { Injectable } from '@nestjs/common';
import { PrismaProvider } from 'src/db/prisma.provider';

@Injectable()
export class ProjetoProvider {
  constructor(private readonly prisma: PrismaProvider) {}

  async findAll(locale: string = 'pt-BR'): Promise<Projeto[]> {
    const projetos = await this.prisma.projeto.findMany({
      include: {
        tecnologias: {
          include: {
            translations: {
              where: {
                locale: locale,
              },
            },
          },
        },
        translations: {
          where: {
            locale: locale,
          },
        },
      },
    });

    return projetos.map((projeto) => ({
      ...projeto,
      nome: projeto.translations[0]?.nome ?? projeto.nome,
      descricao: projeto.translations[0]?.descricao ?? projeto.descricao,
      nivel: Object.values(Nivel)[projeto.nivel] as Nivel,
      tipo: projeto.tipo as Tipo,
      tecnologias: projeto.tecnologias.map((tech) => ({
        ...tech,
        nome: tech.translations[0]?.nome ?? tech.nome,
        descricao: tech.translations[0]?.descricao ?? tech.descricao,
      })),
    }));
  }

  async findById(
    id: number,
    locale: string = 'pt-BR',
  ): Promise<Projeto | null> {
    const projeto = await this.prisma.projeto.findUnique({
      where: { id },
      include: {
        tecnologias: {
          include: {
            translations: {
              where: {
                locale: locale,
              },
            },
          },
        },
        translations: {
          where: {
            locale: locale,
          },
        },
      },
    });

    if (!projeto) {
      return null;
    }

    return {
      ...projeto,
      nome: projeto.translations[0]?.nome ?? projeto.nome,
      descricao: projeto.translations[0]?.descricao ?? projeto.descricao,
      nivel: Object.values(Nivel)[projeto.nivel] as Nivel,
      tipo: projeto.tipo as Tipo,
      tecnologias: projeto.tecnologias.map((tech) => ({
        ...tech,
        nome: tech.translations[0]?.nome ?? tech.nome,
        descricao: tech.translations[0]?.descricao ?? tech.descricao,
      })),
    };
  }
}
