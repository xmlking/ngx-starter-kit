import { createParamDecorator } from '@nestjs/common';
import { QueryBuilder } from 'typeorm-express-query-builder';

export const ORMQuery = createParamDecorator((data, req) => {
  return new QueryBuilder(req.query).build();
});
