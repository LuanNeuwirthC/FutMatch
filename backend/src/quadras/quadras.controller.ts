import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { QuadrasService } from './quadras.service';
import { CreateQuadraDto } from './dto/create-quadra.dto';
import { UpdateQuadraDto } from './dto/update-quadra.dto';

@Controller('quadras')
export class QuadrasController {
  constructor(private readonly quadrasService: QuadrasService) {}

  @Post()
  create(@Body() createQuadraDto: CreateQuadraDto) {
    return this.quadrasService.create(createQuadraDto);
  }

  @Get()
  findAll() {
    return this.quadrasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.quadrasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateQuadraDto: UpdateQuadraDto) {
    return this.quadrasService.update(+id, updateQuadraDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.quadrasService.remove(+id);
  }
}
