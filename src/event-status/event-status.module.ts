import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventStatusService } from './event-status.service';
import { EventStatusController } from './event-status.controller';
import { EventStatus } from './event-status.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EventStatus])],
  providers: [EventStatusService],
  controllers: [EventStatusController],
})
export class EventStatusModule {}
