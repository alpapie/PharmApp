import { Injectable, NotFoundException } from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {User} from './entities/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {

  constructor(@InjectModel('user') private userModel:Model<User>) {
  }

  async connect(user){
   const getUser= await this.userModel.findOne({email:user.email});
   if(!getUser){
     return 'Email ou mot de passe incorrect'
   }
   const isMatch= await bcrypt.compare(user.password,getUser.password);
   if(!isMatch){
     return 'Email ou mot de passe incorrect'
   }
    return `connection reussu ${getUser}`;
   }

  async create(user) {
    const getuser= await this.userModel.findOne({email:user.email}).exec();
    if(getuser){
      throw new NotFoundException('le user existe deja');
    }
    const newUser = new this.userModel(user);
    const result= await newUser.save();
    return result.id;
  }

 async findAll() {
    return await this.userModel.find().exec();
    // return `This action returns all user`;
  }

 async findOne(id: string) {
    let user;
    try{
      user=  await this.userModel.findById(id);
    }catch(error){
      throw new NotFoundException('Probleme dans l\'id');
    }
    if(!user){
      throw new NotFoundException('User not found');
    }
    return user;
  }

  async update(id: string,user) {
    let userUpdate= await this.userModel.updateOne({_id:id},user)
    return `This action updates a #${id} user`;
  }

  async remove(id: string) {
    const user= await this.userModel.deleteOne({ _id: id });
    if(user.deletedCount===0){
      throw new NotFoundException('User not found');
    }
    return `User suprimer avecsucces #${id}`;
  }
}
