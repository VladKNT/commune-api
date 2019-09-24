import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserDetails } from './user-details.entity';
import { UserDetailsRepository } from './user-details.repository';
import { UserDetailsController } from './user-details.controller';

@Module({
  imports: [TypeOrmModule.forFeature([UserDetails, UserDetailsRepository])],
  controllers: [UserDetailsController],
})
export class UserDetailsModule {}
