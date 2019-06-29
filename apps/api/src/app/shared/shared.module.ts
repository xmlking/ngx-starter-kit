import { Module, ParseUUIDPipe } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { CQRSGateway } from './cqrs.gateway';
import { AuthModule } from '../auth';

@Module({
  imports: [CqrsModule, AuthModule],
  providers: [CQRSGateway],
  exports: [CQRSGateway],
})
export class SharedModule {}
