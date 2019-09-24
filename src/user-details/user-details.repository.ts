import { Repository, EntityRepository } from 'typeorm';
import { UserDetails } from './user-details.entity';
import { CreateUserDetailsDto } from './dto/create-user-details.dto';

@EntityRepository(UserDetails)
export class UserDetailsRepository extends Repository<UserDetails> {
  async createUserDetails(createUserDetailsDto: CreateUserDetailsDto) {
    return this.save(createUserDetailsDto);
  }
}
