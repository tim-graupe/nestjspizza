import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { UsersController } from './users/users.controller';
import { AuthModule } from './auth/auth.module';
import { PizzasModule } from './pizza/pizza.module';
@Module({
  imports: [
    PizzasModule,
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.mongoDB),
    UsersModule,
    AuthModule,
  ],
  exports: [PizzasModule],
  controllers: [AppController, UsersController],
  providers: [AppService],
})
export class AppModule {}
