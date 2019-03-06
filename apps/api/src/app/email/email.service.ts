import { join } from 'path';
import { renderFile } from 'pug';
import { Inject, Injectable } from '@nestjs/common';
import { createTransport, SentMessageInfo, Transporter, SendMailOptions } from 'nodemailer';
import { EmailModuleOptions } from './interfaces/email-options.interface';

interface EmailTemplate {
  template?: string;
  context?: any;
}

@Injectable()
export class EmailService {
  private transporter: Transporter;

  constructor(@Inject('EMAIL_CONFIG') private readonly mailerConfig: EmailModuleOptions) {
    if (!mailerConfig.transport || Object.keys(mailerConfig.transport).length < 1) {
      throw new Error(
        'Make sure to provide a nodemailer transport configuration object, connection url or a transport plugin instance',
      );
    }

    this.setupTransporter(mailerConfig.transport, mailerConfig.defaults, mailerConfig.templateDir);
  }

  private setupTransporter(transport: any, defaults?: any, templateDir?: string): void {
    this.transporter = createTransport(transport, defaults);
    this.transporter.use('compile', this.renderTemplate(templateDir));
  }

  async sendMail(sendMailOptions: SendMailOptions & EmailTemplate): Promise<SentMessageInfo> {
    return await this.transporter.sendMail(sendMailOptions);
  }

  private renderTemplate(templateDir): (mail, callback) => void {
    return (mail, callback) => {
      if (mail.data.html) {
        return callback();
      }

      renderFile(
        join(process.cwd(), templateDir || './public/templates', mail.data.template + '.pug'),
        mail.data.context,
        (err, body) => {
          if (err) {
            return callback(err);
          }

          mail.data.html = body;

          return callback();
        },
      );
    };
  }
}
