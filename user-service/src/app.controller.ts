import { Controller, Get, HttpCode, HttpStatus, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { EventPattern, MessagePattern } from '@nestjs/microservices';
import { CreateUserRequest } from './dto/create-user-request.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @MessagePattern('user_created')
  handleUserCreated(createUserRequest: CreateUserRequest): any {
    return this.appService.handleUserCreate(createUserRequest);
  }

  @EventPattern('log_user')
  handleLogAllUser() {
    console.log('event emit ', {});
  }
}
