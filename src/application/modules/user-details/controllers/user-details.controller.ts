import { Controller, Get } from '@nestjs/common';

@Controller('user-details')
export class UserDetailsController {
  @Get()
  findAll() {
    return 'All details';
  }
}
