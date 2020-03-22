import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './interfaces/user.interface';
import { CreateUserDto } from './dto/create-user.dto';
import { USER_MODEL } from './constants';

@Injectable()
export class UsersService {
  constructor(@InjectModel(USER_MODEL) private userModel: Model<User>) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const createdUser = new this.userModel(createUserDto);
    return createdUser.save();
  }

  async findOne(username: CreateUserDto['username']): Promise<User> {
    return this.userModel.findOne({ username });
  }
}