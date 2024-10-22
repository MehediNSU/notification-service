import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './user.entity';

@Entity('notifications')
export class Notification {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.notifications)
  user: User;

  @Column()
  title: string;

  @Column()
  message: string;

  @Column()
  notification_type: string;

  @Column()
  provider: string;

  @Column({ default: 'pending' })
  status: string;

  @Column({ type: 'timestamp', nullable: true })
  sent_at: Date;

  @CreateDateColumn()
  created_at: Date;
}
