import { Controller, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserRequestDto } from './dto/create-user-request.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  handleCreateUser(@Body() createUserRequestDto: CreateUserRequestDto) {
    return this.usersService.createUser(createUserRequestDto);
  }
}
