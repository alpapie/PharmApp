import { UserService } from 'src/user/user.service';
import { Injectable, NotFoundException } from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {Medicament} from './entities/medicament.entity';

@Injectable()
export class MedicamentService {
  constructor(@InjectModel('medicament') private MedicamentModel :Model<Medicament>,
  private readonly userService: UserService
  ){
  }

 async  create(medicament) {
    const NewMedic= new this.MedicamentModel(medicament);
    const result= await NewMedic.save()
    return result.id;
  }

 async findAll() {
    const medicaments= await this.MedicamentModel.find().exec();
    const user= await this.userService.findAll();
    return {user,medicaments};
    
  }

  async findOne(id: string) {
    const medicament= await this.MedicamentModel.findById(id);
    if(!medicament){
      throw new NotFoundException('Medicament not found');
    }
    return medicament ;
  }

  update(id: string) {
    return `This action updates a #${id} medicament`;
  }

  remove(id: string) {
    return `This action removes a #${id} medicament`;
  }
}
