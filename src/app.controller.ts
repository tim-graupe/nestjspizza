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
import { AuthService } from './auth/auth.service';
@Controller()
export class AppController {
  constructor(private authService: AuthService) {}
  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
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