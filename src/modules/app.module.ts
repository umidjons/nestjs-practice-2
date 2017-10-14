import { Module, NestModule, MiddlewaresConsumer, RequestMethod } from '@nestjs/common';
//import { LoggerMiddleware } from './common/middlewares/logger.middleware';
import { loggerMiddleware } from './common/middlewares/logger.middleware';
import { CatsModule } from './cats/cats.module';
import { CatsController } from './cats/cats.controller';
import { SetUserMiddleware } from './common/middlewares/set-user.middleware';

@Module({
  modules: [CatsModule]
})
export class ApplicationModule implements NestModule {

  configure(consumer: MiddlewaresConsumer): void {
    consumer.apply(loggerMiddleware).forRoutes(CatsController);
    consumer.apply(SetUserMiddleware).forRoutes(CatsController);
    /*
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
    */
  }

}
