import { SetMetadata } from '@nestjs/common';

export const Allow = (...roles: AllowEnum[]) => SetMetadata('allow', roles);

export enum AllowEnum {
  PUBLIC = 'public',
  WHITELIST = 'whitelist',
}
