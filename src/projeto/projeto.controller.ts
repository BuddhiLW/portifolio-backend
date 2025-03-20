import { Controller, Get } from '@nestjs/common';
import { Projeto } from '@core';
import { ProjetoProvider } from './projeto.provider';

@Controller('projetos')
export class ProjetoController {
  constructor(private readonly repo: ProjetoProvider) {}

  @Get()
  async findAll(): Promise<Projeto[]> {
    return this.repo.findAll();
  }
} 