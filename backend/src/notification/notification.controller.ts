import { Body, Controller, Get, Param, Post } from '@nestjs/common';
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
}
