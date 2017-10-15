import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { connectionProvider } from './cats.providers';

@Module({
  controllers: [CatsController],
  components: [CatsService, connectionProvider],
  exports: [CatsService]
})
export class CatsModule {}
