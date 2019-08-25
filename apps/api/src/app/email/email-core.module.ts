import { DynamicModule, Module, Global } from '@nestjs/common';
import { EmailService } from './email.service';

import { EmailModuleOptions } from './interfaces/email-options.interface';

const defaultConfig = {
  transport: {
    host: undefined,
    port: 25,
    secure: false,
  },
  defaults: {
    forceEmbeddedImages: false,
    from: undefined,
  },
  templateDir: `${process.cwd()}/assets/email-templates`,
};

@Global()
@Module({})
export class EmailCoreModule {
  static forRoot(userConfig: EmailModuleOptions): DynamicModule {
    const config: EmailModuleOptions = { ...defaultConfig, ...userConfig };

    const EmailConfig = {
      name: 'EMAIL_CONFIG',
      provide: 'EMAIL_CONFIG',
      useValue: {
        transport: config.transport,
        defaults: config.defaults,
        templateDir: config.templateDir,
      } as EmailModuleOptions,
    };

    return {
      module: EmailCoreModule,
      providers: [EmailService, EmailConfig],
      exports: [EmailService],
    };
  }
}
