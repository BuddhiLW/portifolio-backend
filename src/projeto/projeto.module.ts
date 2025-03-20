import { Module } from '@nestjs/common';
import { ProjetoController } from './projeto.controller';
import { ProjetoProvider } from './projeto.provider';
import { DbModule } from 'src/db/db.module';

@Module({
  controllers: [ProjetoController],
  providers: [ProjetoProvider],
  imports: [DbModule],
})
export class ProjetoModule {}
