import { Middleware, NestMiddleware, ExpressMiddleware } from '@nestjs/common';

@Middleware()
export class SetUserMiddleware implements NestMiddleware {

  private users: any[] = [
    {name: 'john', roles: ['admin']},
    {name: 'mike', roles: ['user']}
  ];
  
  async resolve(): Promise<ExpressMiddleware> {
    
    return async(req, res, next) => {
      let userId = req.query['uid'];
      let user = await this.getUser(userId);
      console.log('uid=', userId, 'user=', user);
      req.user = user;

      next();
    };

  }

  async getUser(userId): Promise<any> {
    // dummy implementation
    return Promise.resolve(this.users[userId]);
  }
}
