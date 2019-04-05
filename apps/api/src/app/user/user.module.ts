import { forwardRef, Module } from '@nestjs/common';
import { EmailController } from './email/email.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfileController } from './profile/profile.controller';
import { ProfileService } from './profile/profile.service';
import { Profile } from './profile/profile.entity';
import { Image } from './profile/image.entity';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { User } from './user.entity';

@Module({
  imports: [
    // JwtStrategy, needed for CurrentUser, depends on UserService,
    // which creates a circular dependency that we bypass here
    // forwardRef(() => AuthModule),
    TypeOrmModule.forFeature([Profile, Image, User]),
  ],
  controllers: [EmailController, ProfileController, UserController],
  providers: [ProfileService, UserService],
  exports: [UserService],
})
export class UserModule {}
