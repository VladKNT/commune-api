import { Entity, Column, ManyToOne, ManyToMany, JoinColumn, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../user/user.entity';

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
  @JoinColumn({ name: 'creatorId' })
  members: User[];
}
