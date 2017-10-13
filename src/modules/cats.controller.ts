import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';

@Controller('cats')
export class CatsController {

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    // TODO: Add some logic to create a cat here
  }

  @Get()
  async findAll(): Promise<any[]> {
    return Promise.resolve([{name: 'Tom'}]);
  }

}
