import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('notification_providers')
export class NotificationProvider {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  provider_name: string;

  @Column('jsonb')
  credentials: any; // Store provider credentials in JSON format

  @CreateDateColumn()
  created_at: Date;
}
