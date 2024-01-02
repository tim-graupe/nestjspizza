import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './users.model';
@Injectable()
export class UsersService {
  constructor(@InjectModel('user') private readonly userModel: Model<User>) {}

  async isUsernameTaken(username: string): Promise<boolean> {
    const existingUser = await this.userModel
      .findOne({ username: username.toLowerCase() })
      .exec();
    return !!existingUser;
  }

  async insertUser(userName: string, password: string) {
    const username = userName.toLowerCase();

    // Check if the email is already taken
    const isTaken = await this.isUsernameTaken(username);
    if (isTaken) {
      throw new Error('Email is already taken');
    }
    const newUser = new this.userModel({
      username,
      password,
    });

    await newUser.save();
    return newUser;
  }

  async getUser(userName: string) {
    const username = userName.toLocaleLowerCase();
    const user = await this.userModel.findOne({ username });
    return user;
  }
}
