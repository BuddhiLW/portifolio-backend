import { Controller, Get } from '@nestjs/common';
import { Tecnologia } from '@core';
import { TecnologiaProvider } from './tecnologia.prisma';

@Controller('tecnologias')
export class TecnologiaController {
  constructor(private readonly repo: TecnologiaProvider) { }
  @Get()
  async findAll(): Promise<Tecnologia[]> {
    return this.repo.findAll();
  }

  @Get('destaques')
  async findDestaques(): Promise<Tecnologia[]> {
    return this.repo.findDestaques();
  }
}
