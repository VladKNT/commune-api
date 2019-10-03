import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { UserDetailsController } from './user-details/user-details.controller';
import { UserDetailsModule } from './user-details/user-details.module';
import { RoleModule } from './role/role.module';
import { ChatModule } from './chat/chat.module';
import { MessageModule } from './message/message.module';
import { EventModule } from './event/event.module';
import { EventStatusModule } from './event-status/event-status.module';
import * as ormconfig from './database/config/ormconfig';

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
  controllers: [AppController, UserDetailsController],
  providers: [AppService],
})
export class AppModule {}
