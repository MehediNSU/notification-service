import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateNotificationProviderDto } from './dto/create-notification-provider.dto';
import { NotificationProvider } from './entities/notification-provider.entity';
import { Notification } from './entities/notification.entity';
import { NotificationService } from './notification.service';

@Controller('notifications')
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  // POST endpoint to add a notification
  @Post('create')
  async createNotification(
    @Body()
    notificationData: {
      userId: number;
      title: string;
      message: string;
    },
  ): Promise<Notification> {
    return this.notificationService.createNotification(
      notificationData.userId,
      notificationData.title,
      notificationData.message,
    );
  }

  // Endpoint to get all notifications
  @Get()
  async getAllNotifications(): Promise<Notification[]> {
    return this.notificationService.findAllNotifications();
  }

  // Endpoint to get notifications by user ID
  @Get('user/:userId')
  async getNotificationsByUserId(
    @Param('userId') userId: number,
  ): Promise<Notification[]> {
    return this.notificationService.findNotificationsByUserId(userId);
  }

  // Endpoint to create a notification provider
  @Post('provider/create')
  async createNotificationProvider(
    @Body() createNotificationProviderDto: CreateNotificationProviderDto,
  ): Promise<NotificationProvider> {
    return this.notificationService.createNotificationProvider(
      createNotificationProviderDto,
    );
  }
}
