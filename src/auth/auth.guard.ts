import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly authService : AuthService){}
  
 async canActivate(
    context: ExecutionContext,
  ): Promise<boolean> {
    const req = context.switchToHttp().getRequest();
    const authorization= req.headers.authorization;
    if(authorization){
      const token = authorization.replace('Bearer ', '');
      const ValidToken = await this.authService.IsvalidToken(token);
      return ValidToken;
    }
    return false;
  }
}
