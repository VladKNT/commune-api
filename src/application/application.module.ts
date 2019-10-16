import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './modules/user/user.module';
import { UserDetailsModule } from './modules/user-details/user-details.module';
import { RoleModule } from './modules/role/role.module';
import { ChatModule } from './modules/chat/chat.module';
import { MessageModule } from './modules/message/message.module';
import { EventModule } from './modules/event/event.module';
import { EventStatusModule } from './modules/event-status/event-status.module';
import * as ormconfig from '../resources/config/ormconfig';

@Module({
  imports: [
    TypeOrmModule.forRoot(ormconfig),
    UserModule,
    UserDetailsModule,
    RoleModule,
    ChatModule,
    MessageModule,
    EventModule,
    EventStatusModule,
  ],
})
export class ApplicationModule {}
