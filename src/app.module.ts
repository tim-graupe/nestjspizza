import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PizzasModule } from './pizzas.module';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
@Module({
  imports: [
    AuthModule,
    PizzasModule,
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.mongoDB),
    UsersModule,
  ],
  exports: [PizzasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
