import { Module } from '@nestjs/common';
import { PizzaController } from './app.controller';
import { PizzasService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Pizza, PizzaSchema } from './pizza.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Pizza.name, schema: PizzaSchema }]),
  ],
  controllers: [PizzaController],
  providers: [PizzasService],
})
export class PizzasModule {}
