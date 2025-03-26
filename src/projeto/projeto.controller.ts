import { Controller, Get, Param, Query } from '@nestjs/common';
import { Projeto } from '@core';
import { ProjetoProvider } from './projeto.prisma';

@Controller('projetos')
export class ProjetoController {
  constructor(private readonly repo: ProjetoProvider) {}

  @Get()
  async findAll(@Query('locale') locale?: string): Promise<Projeto[]> {
    return this.repo.findAll(locale);
  }

  @Get(':id')
  async findById(
    @Param('id') id: string,
    @Query('locale') locale?: string
  ): Promise<Projeto | null> {
    return this.repo.findById(parseInt(id), locale);
  }
} 