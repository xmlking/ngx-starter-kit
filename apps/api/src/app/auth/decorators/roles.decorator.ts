import { ReflectMetadata } from '@nestjs/common';

export const Roles = (...roles: string[]) => ReflectMetadata('roles', roles);

export enum RolesEnum {
  SELF = 'SELF',
  ADMIN = 'ROLE_ADMIN',
  USER = 'ROLE_USER',
}
