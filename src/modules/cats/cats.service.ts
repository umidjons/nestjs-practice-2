import { Component } from '@nestjs/common';
import { Cat } from '../interfaces/cats.interface';

@Component()
export class CatsService {

  private readonly cats: Cat[] = [];

  create(cat: Cat) {
    this.cats.push(cat);
  }

  findAll(): Cat[] {
    return this.cats;
  }

  findOne(idx: number) {
    return this.cats[idx];
  }
}
