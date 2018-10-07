import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CrudService } from '../core';
import { User } from './user.entity';
import { JwtToken } from './interfaces/jwt-token.interface';

@Injectable()
export class AuthService extends CrudService<User> {
  constructor(@InjectRepository(User) private readonly userRepository: Repository<User>) {
    super(userRepository);
  }

  async getLoggedUserOrCreate(token: JwtToken): Promise<User> {
    const { email, preferred_username } = token;
    // const user = await this.userRepository.findOne({email});
    const user = await this.userRepository.findOne({ userId: preferred_username });
    if (user) {
      return user;
    } else {
      const newUser = {
        firstName: token.given_name,
        lastName: token.family_name,
        email: token.email,
        userId: token.preferred_username,
      };
      return super.create(newUser);
    }
  }

  // TODO
  // async login(credentials: LoginDto): Promise<any> {
  // }
  // async register({ firstName, lastName, email, password }: any) {
  // }
}
