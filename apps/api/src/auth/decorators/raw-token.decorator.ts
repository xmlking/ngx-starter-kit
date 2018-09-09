import { createParamDecorator } from '@nestjs/common';
import { ExtractJwt } from 'passport-jwt';
const extractor = ExtractJwt.fromAuthHeaderAsBearerToken();

export const RawToken = createParamDecorator((data, req) => {
  return extractor(req);
});
