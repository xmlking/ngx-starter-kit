import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app/app.module';
import { ConfigService } from './app/config';
import * as helmet from 'helmet';
import { join } from 'path';
import { environment as env } from '@env-api/environment';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
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

  // app.useStaticAssets(join(__dirname, './../public')); // for uploaded images

  const options = new DocumentBuilder()
    .setTitle('Sumo API Docs')
    .setDescription('Sumo API for Ngx Starter Kit')
    .setExternalDoc('Github Repo', 'https://github.com/xmlking/ngx-starter-kit/tree/master/apps/api')
    .setVersion(config.getVersion())
    .setSchemes(config.isProd() ? 'https' : 'http')
    .addOAuth2(
      'implicit',
      `${env.auth.issuer}/protocol/openid-connect/auth`,
      `${env.auth.issuer}/protocol/openid-connect/token`,
    )
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('docs', app, document, {
    swaggerOptions: {
      oauth2RedirectUrl: `${env.server.domainUrl}/docs/oauth2-redirect.html`,
      oauth: {
        clientId: env.auth.clientId,
        appName: 'Sumo API',
        // scopeSeparator: ' ',
        // additionalQueryStringParams: {audience: env.oidc.audience},
      },
    },
  });

  // Starts listening to shutdown hooks
  app.enableShutdownHooks();

  await app.listen(env.server.port || 3000, env.server.host || '0.0.0.0');
}

bootstrap();
