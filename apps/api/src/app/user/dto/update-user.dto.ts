import { CreateUserDto } from './create-user.dto';
import { OmitType, PartialType } from '@nestjs/swagger';

// Ref: https://trilon.io/blog/introducing-mapped-types-for-nestjs
export class UpdateUserDto extends PartialType(OmitType(CreateUserDto, ['username'])) {}
