import { Injectable } from '@nestjs/common';
import { CreateUserRequest } from './dto/create-user-request.dto';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  handleUserCreate(createUserRequest: CreateUserRequest) {
    console.log('USER SERVICE: User created->', createUserRequest);
    return { message: 'User created successfully', user: createUserRequest };
  }
}
