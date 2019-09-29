import {Entity, PrimaryGeneratedColumn, ManyToOne, Column, JoinColumn} from 'typeorm';
import { User } from '../user/user.entity';
import { Chat } from '../chat/chat.entity';

@Entity()
export class Message {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  text: string;

  @ManyToOne(type => User, user => user.messages)
  @JoinColumn({ name: 'creatorId' })
  creator: User;

  @ManyToOne(type => Chat, chat => chat.messages)
  chat: Chat;
}
