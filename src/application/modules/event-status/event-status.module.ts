import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventStatusService } from './services/event-status.service';
import { EventStatusController } from './controllers/event-status.controller';
import { EventStatus } from '../../database/models/event-status.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EventStatus])],
  providers: [EventStatusService],
  controllers: [EventStatusController],
})
export class EventStatusModule {}
