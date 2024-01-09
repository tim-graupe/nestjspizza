import { Module } from '@nestjs/common';
import { PizzaController } from './pizza.controller';
import { PizzasService } from './pizza.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Pizza, PizzaSchema } from './pizza.schema';
import { MulterModule } from '@nestjs/platform-express';
import { UsersController } from 'src/users/users.controller';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Pizza.name, schema: PizzaSchema }]),
    MulterModule.register({ dest: './files' }),
    UsersModule,
  ],
  controllers: [PizzaController, UsersController],
  providers: [PizzasService],
})
export class PizzasModule {}
