import { Controller, Get, Post, Body, UseFilters, Param, UseGuards } from '@nestjs/common';
import { CreateCatDto } from '../dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from '../interfaces/cats.interface';
import { ForbiddenException } from '../common/exceptions/forbidden.exception';
import { HttpExceptionFilter } from '../common/exceptions/http-exception.filter';
import { ValidationPipe } from '../common/pipes/validation.pipe';
import { ParseIntPipe } from '../common/pipes/parse-int.pipe';
import { RolesGuard } from '../common/guards/roles.guard';

@Controller('cats')
@UseGuards(RolesGuard)
export class CatsController {

  constructor(private readonly catsService: CatsService) {}

  @Post()
  async create(@Body('', new ValidationPipe()) createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
    //throw new ForbiddenException();
  }

  @Get()
  async findAll(): Promise<any[]> {
    return this.catsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', new ParseIntPipe()) id) {
    return await this.catsService.findOne(id);
  }

}
