import { IsNotEmpty, IsObject, IsString } from 'class-validator';

export class CreateNotificationDto {
  @IsString()
  @IsNotEmpty()
  provider: string;

  @IsString()
  @IsNotEmpty()
  recipient: string;

  @IsString()
  @IsNotEmpty()
  message: string;

  @IsObject()
  credentials: any; // Adjust the type based on your specific credential structure
}
