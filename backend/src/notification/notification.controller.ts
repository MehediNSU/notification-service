import { Body, Controller, Post } from '@nestjs/common';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { NotificationsService } from './notification.service';

@Controller('notifications')
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}

  @Post()
  sendNotification(@Body() createNotificationDto: CreateNotificationDto) {
    return this.notificationsService.sendNotification(createNotificationDto);
  }
}
