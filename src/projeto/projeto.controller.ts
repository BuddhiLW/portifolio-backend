import { Controller, Get, Param } from '@nestjs/common';
import { Projeto } from '@core';
import { ProjetoProvider } from './projeto.prisma';

@Controller('projetos')
export class ProjetoController {
  constructor(private readonly repo: ProjetoProvider) {}

  @Get()
  async findAll(): Promise<Projeto[]> {
    return this.repo.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<Projeto | null> {
    return this.repo.findById(parseInt(id));
  }
} 