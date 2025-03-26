import { Controller, Get, Query } from '@nestjs/common';
import { Tecnologia } from '@core';
import { TecnologiaProvider } from './tecnologia.prisma';

@Controller('tecnologias')
export class TecnologiaController {
  constructor(private readonly repo: TecnologiaProvider) { }
  @Get()
  async findAll(@Query('locale') locale?: string): Promise<Tecnologia[]> {
    return this.repo.findAll(locale);
  }

  @Get('destaques')
  async findDestaques(@Query('locale') locale?: string): Promise<Tecnologia[]> {
    return this.repo.findDestaques(locale);
  }
}
