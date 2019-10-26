import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn, OneToOne, OneToMany } from 'typeorm';
import { User } from './user.entity';
import { EventStatus } from './event-status.entity';
import { EventPhoto } from './event-photo.entity';
import { Comment } from './comment.entity';

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

  @OneToOne(type => EventPhoto, eventPhoto => eventPhoto.eventPreview, { cascade: true, onUpdate: 'CASCADE', onDelete: 'CASCADE' })
  @JoinColumn()
  previewPhoto: EventPhoto;

  @OneToMany(type => EventPhoto, eventPhoto => eventPhoto.eventAlbum)
  photos: EventPhoto[];

  @OneToMany(type => Comment, comment => comment.event)
  comments: Comment[];
}
