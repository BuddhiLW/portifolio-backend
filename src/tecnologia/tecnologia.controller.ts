import { Controller, Get } from '@nestjs/common';
import { Tecnologia } from '@core';

@Controller('tecnologias')
export class TecnologiaController {
  //   @Get()
  //   async findAll() {
  //     return ['Node.js', 'Express.js', 'Nest.js'];
  //   }

  @Get()
  async findAll(): Promise<Tecnologia[]> {
    return [
      {
        id: 1,
        nome: 'Node.js',
        descricao:
          'Node.js ém uma plataforma de desenvolvimento de aplicativos baseada na linguagem JavaScript, que permite a execução de códigos JavaScript fora de um navegador web.',
        imagem:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png',
        destaque: true,
      },
    ];
  }
}
