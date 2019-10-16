import { Entity, Column, ManyToOne, ManyToMany, JoinColumn, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { User } from './user.entity';
import { Message } from './message.entity';

@Entity()
export class Chat {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 32 })
  title: string;

  @Column()
  photoUrl: string;

  @ManyToOne(type => User, user => user.ownChats, { cascade: true })
  @JoinColumn({ name: 'creatorId' })
  creator: User;

  @ManyToMany(type => User, user => user.chats, { cascade: true})
  @JoinColumn()
  members: User[];

  @OneToMany(type => Message, message => message.chat, { cascade: true, onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  messages: Message[];
}
