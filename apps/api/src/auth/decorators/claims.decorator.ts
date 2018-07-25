import { ReflectMetadata } from '@nestjs/common';

export const Claims = (...claims: string[]) => ReflectMetadata('claims', claims);
