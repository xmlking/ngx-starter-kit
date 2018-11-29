import { Module } from '@nestjs/common';
import { EmailController } from './email/email.controller';
import { SharedModule } from '../shared';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfileController } from './profile/profile.controller';
import { ProfileService } from './profile/profile.service';

@Module({
  imports: [
    SharedModule,
    // TypeOrmModule.forFeature([Profile, Image]),
  ],
  controllers: [EmailController, ProfileController],
  providers: [ProfileService],
})
export class UserModule {}
