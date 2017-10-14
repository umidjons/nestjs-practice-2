import * as bodyParser from 'body-parser';
import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './modules/app.module';
//import { HttpExceptionFilter } from './modules/common/exceptions/http-exception.filter';
import { RolesGuard } from './modules/common/guards/roles.guard';

async function bootstrap() {
  const app = await NestFactory.create(ApplicationModule);
  app.use(bodyParser.json());
  //app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalGuards(new RolesGuard());
  await app.listen(3000);
}
bootstrap();
