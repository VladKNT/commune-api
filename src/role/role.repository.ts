import { Repository, EntityRepository } from 'typeorm';
import { Role } from './role.entity';
import {CreateRoleDto} from './dto/create-role.dto';

@EntityRepository(Role)
export class RoleRepository extends Repository<Role>  {
  async createRole(createRoleDto: CreateRoleDto) {
    return this.save(createRoleDto);
  }
}
