import { Entity, PrimaryGeneratedColumn, Column, OneToOne, ManyToOne } from 'typeorm';
import { Event } from './event.entity';

@Entity()
export class EventPhoto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  photoUrl: string;

  @OneToOne(type => Event, event => event.previewPhoto)
  eventPreview: Event;

  @ManyToOne(type => Event, event => event.photos)
  eventAlbum: Event;
}
