import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PizzasModule } from './pizzas.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { PagesController } from './pages/pages.controller';
@Module({
  imports: [
    PizzasModule,
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.mongoDB),
    AuthModule,
    UsersModule,
  ],
  exports: [PizzasModule],
  controllers: [AppController, PagesController],
  providers: [AppService],
})
export class AppModule {}
