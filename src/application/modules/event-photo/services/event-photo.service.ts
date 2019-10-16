import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EventPhoto } from '../../../database/models/event-photo.entity';
import {CreateEventPhotoDto} from '../dto/create-event-photo.dto';

@Injectable()
export class EventPhotoService {
  constructor(
    @InjectRepository(EventPhoto)
    private readonly eventPhotoRepository: Repository<EventPhoto>,
  ) {}

  create(createEventPhotoDto: CreateEventPhotoDto): Promise<EventPhoto> {
    return this.eventPhotoRepository.save(createEventPhotoDto);
  }
}
