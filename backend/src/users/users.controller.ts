import { Body, Controller, Get, Post } from '@nestjs/common';
import { User } from 'src/notification/entities/user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post('create')
  async createUser(
    @Body() userData: { username: string; email: string },
  ): Promise<User> {
    return this.userService.createUser(userData.username, userData.email);
  }

  @Get()
  async getAllUsers(): Promise<User[]> {
    return this.userService.findAll(); // This should now work without error
  }
}
