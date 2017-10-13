import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';

@Module({
  modules: [],
  controllers: [CatsController]
})
export class ApplicationModule {}
