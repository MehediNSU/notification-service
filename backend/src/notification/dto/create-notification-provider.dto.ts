import { IsNotEmpty, IsString } from 'class-validator';

export class CreateNotificationProviderDto {
  @IsNotEmpty()
  @IsString()
  provider_name: string;

  @IsNotEmpty()
  credentials: {
    apiKey: string;
    projectId: string;
    senderId: string;
    appId: string;
    vapidPublicKey: string;
  };
}
