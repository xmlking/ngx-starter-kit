import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { EmailService } from '../../email';
import { EmailDto } from './dto/email.dto';
import { ApiOAuth2Auth, ApiUseTags } from '@nestjs/swagger';

@ApiOAuth2Auth(['read'])
@ApiUseTags('Sumo', 'Email')
@Controller('email')
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async sendEmail(@Body() email: EmailDto): Promise<any> {
    return this.emailService.sendMail({
      to: 'sumo@demo.com',
      subject: email.title,
      template: 'welcome', // The `.pug` extension is appended automatically.
      context: {
        // Data to be sent to PugJS template files.
        title: email.title,
        comments: email.comments,
        name: email.name,
      },
    });
  }
}
