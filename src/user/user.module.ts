import { forwardRef, Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema,User } from './entities/user.entity';

import { PassportModule } from '@nestjs/passport';
import { AuthModule } from 'src/auth/auth.module';
import { AuthService } from 'src/auth/auth.service';
import { JwtModule } from '@nestjs/jwt';


@Module({
  imports: [MongooseModule.forFeature([{ name: 'user', schema: UserSchema }]),JwtModule.register({
    secret: 'secretKey',
    signOptions: { expiresIn: '60s' },
  }),
   forwardRef(() => AuthModule)
],
  controllers: [UserController],
  providers: [UserService,AuthService],
  exports:[UserService]
})
export class UserModule {}
