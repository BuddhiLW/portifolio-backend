import { Tecnologia } from '@core';
import { Injectable } from '@nestjs/common';
import { PrismaProvider } from 'src/db/prisma.provider';

@Injectable()
export class TecnologiaProvider {
  constructor(private readonly prisma: PrismaProvider) {}

  async findAll(locale: string = 'pt-BR'): Promise<Tecnologia[]> {
    const tecnologias = await this.prisma.tecnologia.findMany({
      include: {
        translations: {
          where: {
            locale: locale
          }
        }
      }
    });

    return tecnologias.map(tech => ({
      ...tech,
      nome: tech.translations[0]?.nome ?? tech.nome,
      descricao: tech.translations[0]?.descricao ?? tech.descricao
    }));
  }

  async findDestaques(locale: string = 'pt-BR'): Promise<Tecnologia[]> {
    const tecnologias = await this.prisma.tecnologia.findMany({
      where: {
        destaque: true,
      },
      include: {
        translations: {
          where: {
            locale: locale
          }
        }
      }
    });

    return tecnologias.map(tech => ({
      ...tech,
      nome: tech.translations[0]?.nome ?? tech.nome,
      descricao: tech.translations[0]?.descricao ?? tech.descricao
    }));
  }
}
