import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { CQRSGateway } from './cqrs.gateway';
import { UUIDValidationPipe } from './pipes/uuid-validation.pipe';
import { AuthModule } from '../auth';

@Module({
  imports: [CqrsModule, AuthModule],
  providers: [CQRSGateway, UUIDValidationPipe],
  exports: [CQRSGateway, UUIDValidationPipe],
})
export class SharedModule {}
