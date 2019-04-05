import { NestFactory } from '@nestjs/core';
import { AppModule } from '../app.module';
import { cli } from 'cli-ux';
import { UserService } from '../user';

/**
 * Create admin account using command line interface
 */
const main = async () => {
  const app = await NestFactory.createApplicationContext(AppModule, {
    logger: false,
  });

  const firstName = await cli.prompt('First name');
  const lastName = await cli.prompt('Last name');
  const email = await cli.prompt('Email');
  const username = await cli.prompt('Username');
  const password = await cli.prompt('Password', { type: 'mask' });

  try {
    cli.action.start('creating an admin');

    await app.get(UserService).create({
      firstName,
      lastName,
      email,
      username,
    });

    cli.action.stop();
  } catch (error) {
    cli.action.stop();
    console.error(error);
  } finally {
    await app.close();
  }
};

main();
