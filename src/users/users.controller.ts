import {
  Body,
  Controller,
  Post,
  Request,
  UseGuards,
  Get,
} from '@nestjs/common';
import { UsersService } from './users.service';
import * as bcrypt from 'bcrypt';
import { LocalAuthGuard } from 'src/local-auth-guard';
import { AuthenticatedGuard } from 'src/auth/authenticated.guard';
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Post('/register')
  async addUser(
    @Body('password') userPassword: string,
    @Body('username') userName: string,
  ) {
    const saltOrRounds = 10;
    const hashedPassword = await bcrypt.hash(userPassword, saltOrRounds);
    const result = await this.usersService.insertUser(userName, hashedPassword);
    return {
      msg: 'User successfully registered',
      userId: result.id,
      userName: result.username,
    };
  }
  @Post('/login')
  @UseGuards(LocalAuthGuard)
  login(@Request() req): any {
    return { User: req.user, msg: 'User logged in!' };
  }
  @UseGuards(AuthenticatedGuard)
  @Get('/protected')
  getHello(@Request() req): string {
    return req.user;
  }
  @Get('/logout')
  logout(@Request() req): any {
    req.session.destroy();
    return { msg: 'User successfully logged out' };
  }
}
