import { Injectable } from '@nestjs/common';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { sendSNSNotification } from './providers/aws-sns.providers';
import { sendFirebaseNotification } from './providers/firebase.providers';

@Injectable()
export class NotificationsService {
  async sendNotification(createNotificationDto: CreateNotificationDto) {
    const { provider, recipient, message } = createNotificationDto;

    if (provider === 'firebase') {
      return sendFirebaseNotification(recipient, message);
    } else if (provider === 'aws-sns') {
      return sendSNSNotification(recipient, message);
    }

    return { message: 'Provider not supported' };
  }
}
