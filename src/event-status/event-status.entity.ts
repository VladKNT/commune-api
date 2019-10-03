import { Entity, Column, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Event } from '../event/event.entity';

@Entity()
export class EventStatus {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 16 })
  statusName: string;

  @OneToMany(type => Event, event => event.status)
  events: Event[];
}
