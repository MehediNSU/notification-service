// src/users/users.controller.ts

import { Body, Controller, Get, Post } from '@nestjs/common';
import { User } from '../user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async createUser(
    @Body('name') name: string,
    @Body('email') email: string,
  ): Promise<User> {
    return this.usersService.createUser(name, email);
  }

  @Get()
  async getUsers(): Promise<User[]> {
    return this.usersService.findAll();
  }
}
