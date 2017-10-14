import { Middleware, NestMiddleware, ExpressMiddleware } from '@nestjs/common';

/*
@Middleware()
export class LoggerMiddleware implements NestMiddleware {
  test(): Promise<string> {
    return Promise.resolve('Test string from async function');
  }

  async resolve(name: string): Promise<ExpressMiddleware> {
    // make async operation
    let message = await this.test();
    console.log('Async operation in initialization stage:', message);

    return async(req, res, next) => {
      console.log(`[${name}] Request...`);

      let message = await this.test();
      console.log('Async operation inside a middleware:', message);

      next();
    };
  }
}
*/

export const loggerMiddleware = (req, res, next) => {
  console.log('Request...');
  next();
};
