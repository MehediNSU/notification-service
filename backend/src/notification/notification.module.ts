import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NotificationProvider } from './entities/notification-provider.entity';
import { Notification } from './entities/notification.entity';
import { User } from './entities/user.entity';
import { NotificationController } from './notification.controller';
import { NotificationService } from './notification.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Notification, User, NotificationProvider]),
  ],
  controllers: [NotificationController],
  providers: [NotificationService],
})
export class NotificationsModule {}
