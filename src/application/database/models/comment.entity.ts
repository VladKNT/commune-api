import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Event } from './event.entity';
import { User } from './user.entity';

@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 512 })
  text: string;

  @ManyToOne(type => Event, event => event.comments, { cascade: true, onUpdate: 'CASCADE', onDelete: 'CASCADE' })
  event: Event;

  @ManyToOne(type => User, user => user.comments, { cascade: true, onUpdate: 'CASCADE', onDelete: 'CASCADE' })
  creator: User;
}
