import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreatePizzaDto } from './pizza.dto';
import { Pizza } from './pizza.schema';
import { Model } from 'mongoose';

@Injectable()
export class PizzasService {
  constructor(
    @InjectModel(Pizza.name) private readonly pizzaModel: Model<Pizza>,
  ) {}
  async create(
    createPizzaDto: CreatePizzaDto,
    photo: Express.Multer.File,
  ): Promise<Pizza> {
    const createdPizza = new this.pizzaModel(createPizzaDto);
    createdPizza.photo = photo.path;
    return createdPizza.save();
  }
}
