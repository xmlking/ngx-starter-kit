import { Injectable } from '@nestjs/common';
import { ValidationArguments, ValidatorConstraint } from 'class-validator';
import { UserService } from '../user.service';

/**
 * Custom validation constraint for email uniqueness
 */
@ValidatorConstraint({ name: 'isEmailUnique', async: true })
@Injectable()
export class IsEmailUnique {
  constructor(private readonly userService: UserService) {}

  /**
   * Check email address for uniqueness against existing user entities
   */
  public async validate(email: string): Promise<boolean> {
    const userExists = await this.userService.findByEmail(email);

    return userExists === undefined;
  }

  /**
   * Default error message
   */
  public defaultMessage(args: ValidationArguments): string {
    return 'User with this email already exists.';
  }
}
