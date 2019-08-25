import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { EmailService } from '../../email';
import { EmailDto } from './dto/email.dto';
import { ApiOAuth2Auth, ApiUseTags, ApiExcludeEndpoint } from '@nestjs/swagger';
import { CurrentUser } from '../../auth/decorators';
import { User } from '../user.entity';

@ApiOAuth2Auth(['read'])
@ApiUseTags('Email', 'User')
@Controller('email')
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  // @ApiExcludeEndpoint()
  @Post()
  @HttpCode(HttpStatus.CREATED)
  async sendEmail(@Body() email: EmailDto, @CurrentUser() user: User): Promise<any> {
    return this.emailService.sendMail({
      to: user.email,
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
