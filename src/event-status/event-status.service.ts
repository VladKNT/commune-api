import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EventStatus } from './event-status.entity';
import { CreateEventStatusDto } from './dto/create-event-status.dto';

@Injectable()
export class EventStatusService {
  constructor(
    @InjectRepository(EventStatus)
    private readonly eventStatusRepository: Repository<EventStatus>,
  ) {}

  create(createEventStatusDto: CreateEventStatusDto): Promise<EventStatus> {
    return this.eventStatusRepository.save(createEventStatusDto);
  }
}
