import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserDetails } from './user-details.entity';
import { CreateUserDetailsDto } from './dto/create-user-details.dto';

@Injectable()
export class UserDetailsService {
  constructor(
    @InjectRepository(UserDetails)
    private readonly userDetailsRepository: Repository<UserDetails>,
  ) {}

  create(createUserDetailsDto: CreateUserDetailsDto): Promise<UserDetails> {
    return this.userDetailsRepository.save(createUserDetailsDto);
  }
}
