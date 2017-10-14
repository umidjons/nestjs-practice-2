import * as bodyParser from 'body-parser';
import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './modules/app.module';
//import { HttpExceptionFilter } from './modules/common/exceptions/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(ApplicationModule);
  app.use(bodyParser.json());
  //app.useGlobalFilters(new HttpExceptionFilter());
  await app.listen(3000);
}
bootstrap();
