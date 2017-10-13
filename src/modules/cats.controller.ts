import { Controller, Get, Req } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Get()
  findAll(@Req() request) {
    console.log('Query Params:', request.query);
    return [];
  }
}
