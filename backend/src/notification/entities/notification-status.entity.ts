import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Notification } from './notification.entity';

@Entity('notification_status')
export class NotificationStatus {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Notification)
  notification: Notification;

  @Column()
  status: string;

  @Column({ nullable: true })
  error_message: string;

  @CreateDateColumn()
  updated_at: Date;
}
