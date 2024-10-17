import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Notification {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  provider: string;

  @Column()
  status: string;

  @Column()
  recipient: string;

  @Column()
  message: string;
}
