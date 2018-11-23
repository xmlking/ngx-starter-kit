import { Module } from '@nestjs/common';
import { EventBusGateway } from './eventbus.gateway';
import { AuthModule } from '../auth';

@Module({
  imports: [AuthModule],
  providers: [EventBusGateway],
  exports: [EventBusGateway],
})
export class SharedModule {}
