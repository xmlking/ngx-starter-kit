import { ReflectMetadata } from '@nestjs/common';

export const Allow = (...roles: AllowEnum[]) => ReflectMetadata('allow', roles);

export enum AllowEnum {
  PUBLIC = 'public',
  WHITELIST = 'whitelist',
}
