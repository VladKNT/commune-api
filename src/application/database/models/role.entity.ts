import { Entity, Column, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Role {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 16 })
  roleName: string;

  @OneToMany(type => User, user => user.role)
  users: User[];
}
