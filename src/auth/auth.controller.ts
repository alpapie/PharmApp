import { Controller, Request,Body, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller()
export class AuthController {
    constructor(private authService: AuthService) { }

    
    @Post('auth/login')
    async login(@Body() user) {
        return this.authService.login(user);
    }
}
