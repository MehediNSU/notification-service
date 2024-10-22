import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/notification/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  // Method to create a new user
  async createUser(username: string, email: string): Promise<User> {
    const existingUser = await this.userRepository.findOne({
      where: [{ username }, { email }],
    });

    if (existingUser) {
      throw new Error('User with this username or email already exists');
    }

    const newUser = this.userRepository.create({ username, email });
    return this.userRepository.save(newUser);
  }

  // Method to retrieve all users
  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  // Method to retrieve a user by ID with their notifications
  async getUserById(userId: number): Promise<User> {
    const user = await this.userRepository.findOne({
      where: { id: userId },
      relations: ['notifications'],
    });

    if (!user) {
      throw new Error('User not found');
    }

    return user;
  }
}
