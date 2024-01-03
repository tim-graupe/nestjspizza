import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { AppService, PizzasService } from './app.service';
import { CreatePizzaDto } from './pizza/pizza.dto';
import { Pizza } from './pizza/pizza.interface';
// import { AuthGuard } from '@nestjs/passport';
import { LocalAuthGuard } from './local-auth-guard';
import { FileInterceptor } from '@nestjs/platform-express';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return req.user;
  }
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

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
  @Get()
  async findAll(): Promise<Pizza[]> {
    return this.pizzaService.findAll();
  }
}
