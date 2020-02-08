import { environment as env } from '@env-api/environment';
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { useContainer } from 'class-validator';
import * as helmet from 'helmet';
import { AppModule } from './app/app.module';
import { ConfigService } from './app/config';
// import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true /* logger: ['log', 'error', 'warn'] */ });
  const config: ConfigService = app.get(ConfigService);
  app.use(helmet());
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
      skipMissingProperties: false,
      forbidUnknownValues: true,
    }),
  );

  // Link DI container to class-validator
  useContainer(app.select(AppModule), { fallbackOnErrors: true });

  // for uploaded images
  // app.useStaticAssets(join(__dirname, './../public'));

  const openIdConf = await config.getOpenIdConfiguration();
  const options = new DocumentBuilder()
    .setTitle('Sumo API Docs')
    .setDescription('Sumo API for Ngx Starter Kit')
    .setExternalDoc('Github Repo', 'https://github.com/xmlking/ngx-starter-kit/tree/master/apps/api')
    .setVersion(config.getVersion())
    .addOAuth2({
      type: 'oauth2',
      scheme: config.isProd() ? 'https' : 'http',
      flows: {
        implicit: {
          authorizationUrl: openIdConf.authorization_endpoint,
          tokenUrl: openIdConf.token_endpoint,
          scopes: { opened: 'openid', profile: 'profile', email: 'email' },
        },
      },
    })
    .build();
  const document = SwaggerModule.createDocument(app, options);
  const { additionalQueryStringParams } = config.getAuth();
  SwaggerModule.setup('docs', app, document, {
    swaggerOptions: {
      oauth2RedirectUrl: `${env.server.domainUrl}/docs/oauth2-redirect.html`,
      oauth: {
        clientId: env.auth.clientId,
        appName: 'Sumo API',
        // scopeSeparator: ' ',
        additionalQueryStringParams,
      },
    },
  });

  // Starts listening to shutdown hooks
  app.enableShutdownHooks();

  await app.listen(env.server.port || 3000, env.server.host || '0.0.0.0');
}

bootstrap();
