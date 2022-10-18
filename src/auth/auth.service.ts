import { Injectable, NotFoundException } from '@nestjs/common';
import { UserService } from  'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private jwtService: JwtService
        ){}
    async validate(user){

        if(!user){
            return null
          }
        const isMatch= await bcrypt.compare(user.password,user.password);
        if(!isMatch){
        return null
        }
        return user
    }

    async login(user){

        const userGet=await this.userService.finduser(user);
        if(!userGet){
            throw new NotFoundException("Email ou mot de passe incorrect");
        }
        const payload = { email: userGet.email, sub: userGet.id };
        
        return {
        access_token: this.jwtService.sign(payload),
        };
    }
    async IsvalidToken(token){
        try{
            const payload = await this.jwtService.verify(token);
            return true;
        }
        catch{
            return false;
        }
    }

}
