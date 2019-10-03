import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { User } from '../user/user.entity';
import { EventStatus } from '../event-status/event-status.entity';

@Entity()
export class Event {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 32 })
  name: string;

  @Column()
  description: string;

  @Column()
  startDate: Date;

  @Column()
  endDate: Date;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(type => User, user => user.ownEvents)
  @JoinColumn({ name: 'creatorId' })
  creator: User;

  @ManyToOne(type => EventStatus, eventStatus => eventStatus.events, { cascade: true, onDelete: 'SET NULL' })
  status: EventStatus;
}
