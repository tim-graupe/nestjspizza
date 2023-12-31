import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AppService, PizzasService } from './app.service';
import { CreatePizzaDto } from './pizza.dto';
import { Pizza } from './pizza.interface';
// import { AuthGuard } from '@nestjs/passport';
import { LocalAuthGuard } from './local-auth-guard';
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
  async create(@Body() createPizzaDto: CreatePizzaDto) {
    this.pizzaService.create(createPizzaDto);
  }
  @Get()
  async findAll(): Promise<Pizza[]> {
    return this.pizzaService.findAll();
  }
}
