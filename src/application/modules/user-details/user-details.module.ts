import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserDetails } from '../../database/models/user-details.entity';
import { UserDetailsController } from './controllers/user-details.controller';
import { UserDetailsService } from './services/user-details.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserDetails])],
  providers: [UserDetailsService],
  controllers: [UserDetailsController],
})
export class UserDetailsModule {}
