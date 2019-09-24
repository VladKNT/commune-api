import { Entity, Column, OneToOne, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn } from 'typeorm';
import { UserDetails } from '../user-details/user-details.entity';
import { Role } from '../role/role.entity';

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

  @OneToOne(type => UserDetails, userDetails => userDetails.user, { cascade: true, onDelete: 'CASCADE' })
  @JoinColumn()
  details: UserDetails;

  @ManyToOne(type => Role, role => role.users, { cascade: true, onDelete: 'SET NULL' })
  role: Role;
}
