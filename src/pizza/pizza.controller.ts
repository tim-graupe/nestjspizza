import {
  Body,
  Controller,
  //   Get,
  Post,
  // Request,
  UploadedFile,
  // UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { PizzasService } from './pizza.service';
import { CreatePizzaDto } from './pizza.dto';
// import { Pizza } from './pizza.interface';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('new_pizza')
export class PizzaController {
  constructor(private pizzaService: PizzasService) {}
  @Post()
  @UseInterceptors(FileInterceptor('photo'))
  async create(
    @Body() createPizzaDto: CreatePizzaDto,
    @UploadedFile() photo: Express.Multer.File,
  ) {
    this.pizzaService.create(createPizzaDto, photo);
  }
}
