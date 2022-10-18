
import { forwardRef, Module } from "@nestjs/common"
import { UserModule } from "src/user/user.module";
import { AuthService } from "./auth.service"
import { PassportModule } from "@nestjs/passport"
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { UserService } from "src/user/user.service";
import { MongooseModule } from "@nestjs/mongoose"
import { UserSchema } from "src/user/entities/user.entity";
// import { LocalStrategy } from './local-strategy';


@Module({
  imports: [ PassportModule, JwtModule.register({
    secret: 'secretKey',
    signOptions: { expiresIn: '3600s' },
  }), forwardRef(() => UserModule)],
  providers: [AuthService],
  controllers: [AuthController],
  exports: [ AuthModule,AuthService]
})
export class AuthModule { }
