import {
  Entity,
  Column,
  OneToOne,
  OneToMany,
  ManyToOne,
  ManyToMany,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserDetails } from './user-details.entity';
import { Role } from './role.entity';
import { Chat } from './chat.entity';
import { Message } from './message.entity';
import { Event } from './event.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 32 })
  username: string;

  @Column({ length: 32 })
  email: string;

  @Column()
  password: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToOne(type => UserDetails, userDetails => userDetails.user, { cascade: true, onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  @JoinColumn()
  details: UserDetails;

  @ManyToOne(type => Role, role => role.users, { cascade: true, onDelete: 'SET NULL' })
  role: Role;

  @OneToMany(type => Chat, chat => chat.creator)
  ownChats: Chat[];

  @ManyToMany(type => Chat, chat => chat.members)
  chats: Chat[];

  @ManyToOne(type => Message, message => message.creator)
  messages: Message[];

  @ManyToOne(type => Event, event => event.creator)
  ownEvents: Event[];
}
