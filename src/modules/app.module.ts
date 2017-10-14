import { Module, NestModule, MiddlewaresConsumer, RequestMethod } from '@nestjs/common';
import { LoggerMiddleware } from './common/middlewares/logger.middleware';
import { CatsModule } from './cats/cats.module';

@Module({
  modules: [CatsModule]
})
export class ApplicationModule implements NestModule {

  configure(consumer: MiddlewaresConsumer): void {
    consumer.apply(LoggerMiddleware)
      .with('ApplicationModule') // pass string to the middleware
      .forRoutes(
        {path: '/cats', method: RequestMethod.GET},
        {path: '/cats', method: RequestMethod.POST}
        // or
        // {path: '/cats', method: RequestMethod.ALL}
        // or just specify controller
        // .forRoutes(CatsController)
      );
  }

}
