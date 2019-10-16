import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn, OneToOne } from 'typeorm';
import { User } from './user.entity';
import { EventStatus } from './event-status.entity';
import {EventPhoto} from './event-photo.entity';

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

  @ManyToOne(type => EventPhoto, eventPhoto => eventPhoto.eventAlbum, { cascade: true, onUpdate: 'CASCADE', onDelete: 'CASCADE' })
  photos: EventPhoto[];
}
