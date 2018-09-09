import { Module } from '@nestjs/common';
import { ChatService } from './chat.service';
import { ChatController } from './chat.controller';
import { ChatGateway } from './chat.gateway';

@Module({
  providers: [ChatService, ChatGateway],
  controllers: [ChatController],
})
export class ChatModule {}
