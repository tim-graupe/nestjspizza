import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreatePizzaDto } from './pizza.dto';
import { Model } from 'mongoose';
import { Pizza } from './pizza.schema';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Deuce';
  }
}
@Injectable()
export class PizzasService {
  constructor(@InjectModel(Pizza.name) private pizzaModel: Model<Pizza>) {}
  async create(createPizzaDto: CreatePizzaDto): Promise<Pizza> {
    const createdPizza = new this.pizzaModel(createPizzaDto);
    return createdPizza.save();
  }
  async findAll(): Promise<Pizza[]> {
    return this.pizzaModel.find().exec();
  }
}
