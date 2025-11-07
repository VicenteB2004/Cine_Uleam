import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { CreateUsersDto } from './dto/create-users.dto/create-users.dto';
import { UsersService } from './users.service';
import { UpdateUsersDto } from './dto/update-users.dto/update-users.dto';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createUserDto: CreateUsersDto) {
    return this.usersService.createUser(createUserDto);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id_user')
  findOne(@Param('id_user') id_user: string) {
    return this.usersService.findOne(+id_user);
  }

  @Patch(':id_user')
  update(@Param('id_user') id_user: string, @Body() updateUserDto: UpdateUsersDto) {
    return this.usersService.update(+id_user, updateUserDto);
  }

  @Delete(':id_user')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id_user') id_user: string) {
    return this.usersService.remove(+id_user);
  }
}
