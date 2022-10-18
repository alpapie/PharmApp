import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import * as bcrypt from 'bcrypt';
// import { AuthGuard } from '@nestjs/passport';
import { AuthGuard } from 'src/auth/auth.guard';


@UseGuards(AuthGuard)
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

// @Post('/login')
// async connect(@Body() user){
//   return this.userService.finduser(user);
// }


  @Post()
 async create(@Body() user) {
    user.password= await bcrypt.hash(user.password,10);
    return this.userService.create(user);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string ,@Body() user) {
    return this.userService.update(id,user);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(id);
  }
}
