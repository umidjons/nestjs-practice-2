import { Controller, Get, Post } from '@nestjs/common';

@Controller('cats')
export class CatsController {

  @Post()
  create() {
    // TODO: Add some logic to create a cat here
  }

  @Get()
  async findAll(): Promise<any[]> {
    return Promise.resolve([{name: 'Tom'}]);
  }

}
