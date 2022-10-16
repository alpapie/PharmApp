import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MedicamentService } from './medicament.service';

@Controller('medicament')
export class MedicamentController {
  constructor(private readonly medicamentService: MedicamentService) {}

  @Post()
  create(@Body() medicament) {
    return this.medicamentService.create(medicament);
  }

  @Get()
  findAll() {
    return this.medicamentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.medicamentService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() medicament) {
    return this.medicamentService.update(id, );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.medicamentService.remove(id);
  }
}
