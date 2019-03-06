import { Module, DynamicModule } from '@nestjs/common';
import { EmailCoreModule } from './email-core.module';
import { EmailModuleOptions } from './interfaces/email-options.interface';

@Module({})
export class EmailModule {
  static forRoot(config?: EmailModuleOptions): DynamicModule {
    return {
      module: EmailModule,
      imports: [EmailCoreModule.forRoot(config)],
    };
  }
}
