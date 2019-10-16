import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventPhotoService } from './services/event-photo.service';
import { EventPhotoController } from './controllers/event-photo.controller';
import { EventPhoto } from '../../database/models/event-photo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EventPhoto])],
  providers: [EventPhotoService],
  controllers: [EventPhotoController],
})
export class EventPhotoModule {}
