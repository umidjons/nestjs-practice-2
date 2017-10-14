import { Guard, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs/Observable';
import { Reflector } from '@nestjs/core';

@Guard()
export class RolesGuard implements CanActivate {

  constructor(private readonly reflector: Reflector) {}

  canActivate(req, context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {

    const { parent, handler } = context;
    const roles = this.reflector.get<string[]>('roles', handler);

    if (!roles) {
      return true;
    }

    // Get user info from request object
    const user = req.user;

    // Function to find given roles in user's roles
    const hasRole = () => !!user.roles.find(role => !!roles.find(item => item === role));
    
    // true - if user has appropriate role
    return user && user.roles && hasRole();
  }

}
