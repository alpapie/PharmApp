import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MedicamentModule } from './medicament/medicament.module';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [MedicamentModule, UserModule,
    MongooseModule.forRoot("mongodb+srv://alpapie:WvOsLBBU1ztGsJoZ@cluster0.hso1qka.mongodb.net/PharmApp?retryWrites=true&w=majority"),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
