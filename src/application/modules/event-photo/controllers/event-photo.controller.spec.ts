import { Test, TestingModule } from '@nestjs/testing';
import { EventPhotoController } from './event-photo.controller';

describe('EventPhoto Controller', () => {
  let controller: EventPhotoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EventPhotoController],
    }).compile();

    controller = module.get<EventPhotoController>(EventPhotoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
