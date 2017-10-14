import { Controller, Get, Post, Body, HttpStatus } from '@nestjs/common';
import { HttpException } from '@nestjs/core';
import { CreateCatDto } from '../dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from '../interfaces/cats.interface';

@Controller('cats')
export class CatsController {

  constructor(private readonly catsService: CatsService) {}

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    //this.catsService.create(createCatDto);
    throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
  }

  @Get()
  async findAll(): Promise<any[]> {
    return this.catsService.findAll();
  }

}
