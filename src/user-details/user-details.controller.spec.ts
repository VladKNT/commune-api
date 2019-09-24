import { Test, TestingModule } from '@nestjs/testing';
import { UserDetailsController } from './user-details.controller';

describe('UserDetails Controller', () => {
  let controller: UserDetailsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserDetailsController],
    }).compile();

    controller = module.get<UserDetailsController>(UserDetailsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
