import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateCatDto } from '../dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from '../interfaces/cats.interface';
import { ForbiddenException } from '../common/exceptions/forbidden.exception';

@Controller('cats')
export class CatsController {

  constructor(private readonly catsService: CatsService) {}

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    //this.catsService.create(createCatDto);
    throw new ForbiddenException();
  }

  @Get()
  async findAll(): Promise<any[]> {
    return this.catsService.findAll();
  }

}
