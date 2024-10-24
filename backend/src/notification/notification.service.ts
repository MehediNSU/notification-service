import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateNotificationProviderDto } from './dto/create-notification-provider.dto';
import { NotificationProvider } from './entities/notification-provider.entity';
import { Notification } from './entities/notification.entity';
import { User } from './entities/user.entity';

@Injectable()
export class NotificationService {
  constructor(
    @InjectRepository(Notification)
    private readonly notificationRepository: Repository<Notification>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(NotificationProvider)
    private readonly notificationProviderRepository: Repository<NotificationProvider>,
  ) {}

  // Method to create a notification
  async createNotification(
    userId: number,
    title: string,
    message: string,
  ): Promise<Notification> {
    const user = await this.userRepository.findOne({ where: { id: userId } });

    if (!user) {
      throw new Error('User not found');
    }

    const newNotification = this.notificationRepository.create({
      user,
      title,
      message,
      notification_type: 'push', // Example type, can be dynamic
      provider: 'Firebase', // Example provider, can be dynamic
      status: 'pending',
    });

    return this.notificationRepository.save(newNotification);
  }

  // Method to get all notifications
  async findAllNotifications(): Promise<Notification[]> {
    return this.notificationRepository.find({ relations: ['user'] });
  }

  // Method to fetch notifications by user ID
  async findNotificationsByUserId(userId: number): Promise<Notification[]> {
    return this.notificationRepository.find({
      where: { user: { id: userId } },
      relations: ['user'],
    });
  }

  // Method to create notification provided
  async createNotificationProvider(
    createNotificationProviderDto: CreateNotificationProviderDto,
  ): Promise<NotificationProvider> {
    const { provider_name, credentials } = createNotificationProviderDto;

    const newProvider = this.notificationProviderRepository.create({
      provider_name,
      credentials,
    });

    return this.notificationProviderRepository.save(newProvider);
  }
}
