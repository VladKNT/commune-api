import { Test, TestingModule } from '@nestjs/testing';
import { EventPhotoService } from './event-photo.service';

describe('EventPhotoService', () => {
  let service: EventPhotoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EventPhotoService],
    }).compile();

    service = module.get<EventPhotoService>(EventPhotoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
