import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
// @ts-ignore
import { AppModule } from '../../api/src/app/app.module';
require('require-context/register');
jest.setTimeout(30000);

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect(/Welcome to Sumo API/);
  });

  afterAll(async () => {
    await app.close();
  });
});
