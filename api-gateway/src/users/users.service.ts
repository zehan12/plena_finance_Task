import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateUserRequestDto } from './dto/create-user-request.dto';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USER_SERVICE') private readonly userServiceClient: ClientProxy,
  ) {}

  async createUser(createUserRequestDto: CreateUserRequestDto) {
    const result = await this.userServiceClient
      .send('user_created', createUserRequestDto)
      .toPromise();
    return result;
  }
}
