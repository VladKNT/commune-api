import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserDetails } from './user-details.entity';
import { UserDetailsController } from './user-details.controller';
import { UserDetailsService } from './user-details.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserDetails])],
  providers: [UserDetailsService],
  controllers: [UserDetailsController],
})
export class UserDetailsModule {}
