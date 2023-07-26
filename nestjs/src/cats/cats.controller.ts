import { Controller, Get, Query, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { CatsService } from './cats.service';
import { Cat } from './cat.entity';
import { CreateCatDto } from './dto';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Cat> {
    return this.catsService.findOne(id);
  }

  @Post()
  async create(@Body() cat: CreateCatDto) {
    this.catsService.create(cat);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    this.catsService.remove(id);
  }  
}