import { SetMetadata } from '@nestjs/common';

export const Claims = (...claims: string[]) => SetMetadata('claims', claims);
