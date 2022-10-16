import { UserModule } from 'src/user/user.module';
import { Module } from '@nestjs/common';
import { MedicamentService } from './medicament.service';
import { MedicamentController } from './medicament.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { MedicamentSchema } from './entities/medicament.entity';


@Module({
  imports: [MongooseModule.forFeature([{ name: 'medicament', schema: MedicamentSchema }]),UserModule],
  controllers: [MedicamentController],
  providers: [MedicamentService]

})
export class MedicamentModule {}
