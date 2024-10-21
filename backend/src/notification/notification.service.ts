import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { sendSNSNotification } from './providers/aws-sns.providers';
import { sendFirebaseNotification } from './providers/firebase.providers';

@Injectable()
export class NotificationsService {
  constructor(private configService: ConfigService) {}

  async sendNotification(createNotificationDto: CreateNotificationDto) {
    const { provider, recipient, message } = createNotificationDto;

    if (provider === 'firebase') {
      return sendFirebaseNotification(recipient, message);
    } else if (provider === 'aws-sns') {
      return sendSNSNotification(recipient, message);
    }

    return { message: 'Provider not supported' };
  }

  getFirebaseApiKey() {
    return this.configService.get<string>('FIREBASE_API_KEY');
  }

  getAwsRegion() {
    return this.configService.get<string>('AWS_SNS_REGION');
  }
}
